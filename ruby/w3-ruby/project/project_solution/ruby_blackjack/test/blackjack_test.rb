require 'minitest/autorun'

class TestBlackjack < Minitest::Test
  def setup
    @deck = Deck.new
    @game = Game.new
    @player = Player.new
    @dealer = Dealer.new
  end

  def test_game_initializes
    assert_instance_of Game, @game
  end

  def test_that_there_is_a_player
    assert_instance_of Player, @player
  end

  def test_game_greets_player
    assert_equal "Hello! Shall we play Blackjack?", @game.greeting
  end

  def test_that_player_starts_with_100_dollars
    assert_equal @player.initial_balance, 100
  end

  def test_that_bets_are_10_dollars
    assert_equal @player.bet, 10
  end

  def test_that_player_can_hit

  end
end
