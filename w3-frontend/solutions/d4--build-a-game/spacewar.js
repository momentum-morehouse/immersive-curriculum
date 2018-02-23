import playerImg from "./img/ship.png";
import enemyImg1 from "./img/enemy1.png";
import enemyImg2 from "./img/enemy2.png";
import enemyImg3 from "./img/enemy3.png";
import explosionImg from "./img/explosion.png";
import {throttle} from 'lodash';

const BLACK = "rgb(0, 0, 0)";
const WHITE = "rgb(255, 255, 255)";
const ORANGE = "rgb(255, 87, 51)";
const KEYS = { UP: 38, LEFT: 37, RIGHT: 39, SPACE: 32 };
const ENEMY_IMGS = [enemyImg1, enemyImg2, enemyImg3];

class Game {
    constructor(canvas, keyboarder) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d", { alpha: false });
        this.size = { x: canvas.width, y: canvas.height };
        this.height = canvas.height;
        this.width = canvas.width;
        this.keyboarder = keyboarder;
        this.reset();

        this.addEnemy = throttle(this.addEnemy.bind(this), 500);
    }

    reset() {
        this.bodies = [];
        this.score = 0;
        this.ended = false;
    }

    setup() {
        this.ctx.fillStyle = BLACK;
        this.ctx.fillRect(0, 0, this.size.x, this.size.y);
        this.ctx.font = "24px sans-serif";
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = WHITE;
        this.ctx.fillText(
            "Press UP to begin",
            this.size.x / 2,
            this.size.y / 2
        );
        this.keyboarder.onOnce(KEYS.UP, e => {
            this.start();
        });
    }

    start() {
        const player = new Player(
            this,
            { x: this.size.x / 2, y: this.size.y - 40 },
            { x: 30, y: 30 }
        );
        this.bodies.push(player);

        this.run();
    }

    run() {
        if (this.ended) {
            this.ctx.font = "24px sans-serif";
            this.ctx.textAlign = "center";
            this.ctx.fillStyle = WHITE;
            this.ctx.fillText(
                "Press UP to play again",
                this.size.x / 2,
                this.size.y / 2
            );
            this.keyboarder.onOnce(KEYS.UP, e => {
                this.reset();
                this.start();
            });
        } else {
            this.update();
            this.draw();
            requestAnimationFrame(this.run.bind(this));
        }
    }

    update() {
        this.addEnemy();
        this.bodies.forEach(body => body.update());
        this.bodies.forEach(body => {
            let collidingBody = body.findColliding();
            if (collidingBody) {
                body.takeHit(collidingBody);
            }
        })
        this.bodies = this.bodies.filter(body => !body.destroyed);
    }

    isColliding(body) {
        return this.bodies.filter(otherBody => body.colliding(otherBody)).length > 0;
    }

    addEnemy() {
        const enemy = new Enemy(this, {
            x: Math.floor(Math.random() * this.size.x),
            y: 0
        }, {
            x: 30, y: 30
        }, 2)

        this.bodies.push(enemy);
    }

    draw() {
        this.ctx.fillStyle = BLACK;
        this.ctx.fillRect(0, 0, this.size.x, this.size.y);

        this.bodies.forEach(body => {
            body.draw();
        });

        this.ctx.font = "24px monospace";
        this.ctx.textAlign = "right";
        this.ctx.fillStyle = WHITE;
        this.ctx.fillText(
            this.score,
            this.size.x - 10,
            40
        );
    }
}

class Body {
    constructor(game, center, size) {
        this.game = game;
        this.center = center;
        this.size = size;
        this.destroyed = false;
    }

    // **colliding()** returns true if the passed body is colliding with this body.
    // The approach is to test for five situations.  If any are true,
    // the bodies are definitely not colliding.  If none of them
    // are true, the bodies are colliding.
    // 1. b1 is the same body as b2.
    // 2. Right of `b1` is to the left of the left of `b2`.
    // 3. Bottom of `b1` is above the top of `b2`.
    // 4. Left of `b1` is to the right of the right of `b2`.
    // 5. Top of `b1` is below the bottom of `b2`.
    colliding(other) {
        return !(
            this === other ||
            this.center.x + this.size.x / 2 <
                other.center.x - other.size.x / 2 ||
            this.center.y + this.size.y / 2 <
                other.center.y - other.size.y / 2 ||
            this.center.x - this.size.x / 2 >
                other.center.x + other.size.x / 2 ||
            this.center.y - this.size.y / 2 > other.center.y + other.size.y / 2
        );
    }

    findColliding() {
        return this.game.bodies.find(body => body.colliding(this));
    }

    takeHit(other) {
        this.destroyed = true;
    }
}

class Player extends Body {
    constructor(game, center, size) {
        super(game, center, size);
        this.imageLoaded = false;
        this.image = new Image(size.x, size.y);
        this.image.addEventListener('load', () => {
            this.imageLoaded = true;
        })
        this.image.src = playerImg;

        this.shootBullet = throttle(this.shootBullet.bind(this), 150);
    }

    update() {
        if (this.game.keyboarder.isDown(KEYS.LEFT)) {
            this.center.x = Math.max(this.size.x / 2, this.center.x - 5);
        }

        if (this.game.keyboarder.isDown(KEYS.RIGHT)) {
            this.center.x = Math.min(this.game.size.x - (this.size.x / 2), this.center.x + 5);
        }

        if (this.game.keyboarder.isDown(KEYS.SPACE)) {
            this.shootBullet();
        }
    }

    shootBullet() {
        this.game.bodies.push(new Bullet(this.game, {
            x: this.center.x,
            y: this.center.y - (this.size.y / 2) - 5
        }, {
            x: 2, y: 5
        }, -10))
    }

    draw() {
        if (this.imageLoaded) {
            this.game.ctx.drawImage(
                this.image,
                this.center.x - this.size.x / 2,
                this.center.y - this.size.y / 2,
                this.size.x,
                this.size.y
            );
        }
    }

    takeHit() {
        this.game.bodies.push(new Explosion(this.game, this.center, this.size));
        this.destroyed = true;
        this.game.ended = true;
    }
}

class Bullet extends Body {
    constructor(game, center, size, delta) {
        super(game, center, size);
        this.delta = delta;
    }

    update() {
        this.center.y += this.delta;
        if (this.center.y < 0 || this.center.y > this.game.size.y) {
            this.destroyed = true;
        }
    }

    draw() {
        this.game.ctx.fillStyle = ORANGE;
        this.game.ctx.fillRect(
            this.center.x - (this.size.x / 2),
            this.center.y - (this.size.y / 2),
            this.size.x,
            this.size.y
        );
    }
}

class Enemy extends Body {
    constructor(game, center, size, delta) {
        super(game, center, size);
        this.delta = delta;

        const imageSrc = ENEMY_IMGS[Math.floor(Math.random() * 3)];

        this.imageLoaded = false;
        this.image = new Image(size.x, size.y);
        this.image.addEventListener('load', () => {
            this.imageLoaded = true;
        })
        this.image.src = imageSrc;
    }

    update() {
        this.center.y += this.delta;
        if (this.center.y > this.game.size.y) {
            this.game.score -= 100;
        }
        if (this.center.y < 0 || this.center.y > this.game.size.y) {
            this.destroyed = true;
        }
    }

    draw() {
        if (this.imageLoaded) {
            this.game.ctx.drawImage(
                this.image,
                this.center.x - this.size.x / 2,
                this.center.y - this.size.y / 2,
                this.size.x,
                this.size.y
            );
        }
    }

    takeHit() {
        this.game.bodies.push(new Explosion(this.game, this.center, this.size));
        this.destroyed = true;
        this.game.score += 10;
    }
}

class Explosion extends Body {
    constructor(game, center, size) {
        super(game, center, size);
        this.imageLoaded = false;
        this.image = new Image(size.x, size.y);
        this.image.addEventListener('load', () => {
            this.imageLoaded = true;
        })
        this.image.src = explosionImg;
        this.sx = 0;
        this.sy = 0;
        this.frame = 0;
    }

    update() {
        this.frame += 1;
        const frames = 10;

        if (this.frame > frames * 4) {
            this.destroyed = true;
        } else if (this.frame > frames * 3) {
            this.sx = 70;
            this.sy = 70;
        } else if (this.frame > frames * 2) {
            this.sx = 0;
            this.sy = 70;
        } else if (this.frame > frames) {
            this.sx = 70;
            this.sy = 0;
        }
    }

    draw() {
        if (this.imageLoaded) {
            this.game.ctx.drawImage(
                this.image,
                this.sx,
                this.sy,
                70,
                70,
                this.center.x - this.size.x / 2,
                this.center.y - this.size.y / 2,
                this.size.x,
                this.size.y
            );
        }
    }

    takeHit() {}
}

class Keyboarder {
    constructor() {
        this.keyState = {};

        window.addEventListener("keydown", e => {
            this.keyState[e.keyCode] = true;
        });

        window.addEventListener("keyup", e => {
            this.keyState[e.keyCode] = false;
        });
    }

    isDown(keyCode) {
        return this.keyState[keyCode] === true;
    }

    on(keyCode, fn) {
        const wrappedFn = e => {
            if (e.keyCode === keyCode) {
                fn(e);
            }
        };
        window.addEventListener("keydown", wrappedFn);
    }

    onOnce(keyCode, fn) {
        const wrappedFn = e => {
            if (e.keyCode === keyCode) {
                fn(e);
            }
            window.removeEventListener("keydown", wrappedFn);
        };

        window.addEventListener("keydown", wrappedFn);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const game = new Game(
        document.getElementById("game-canvas"),
        new Keyboarder()
    );
    game.setup();
});
