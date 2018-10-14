require_relative "card"

class Deck

  def initialize
    @deck = []
    Card::SUITS.each do |suit|
      Card::RANKS.each do |rank|
        @deck << Card.new(rank, suit)
      end
    end
  end

  def draw
    @deck.shift
  end

  def cards_left
    @deck.length
  end

  def shuffle
    @deck.shuffle!
  end

end
