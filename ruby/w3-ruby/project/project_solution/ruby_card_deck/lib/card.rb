class Card

  attr_accessor :rank, :suit
  RANKS = [:A, 2, 3, 4, 5, 6, 7, 8, 9, 10, :J, :Q, :K]
  SUITS = %i[clubs diamonds hearts spades]

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end

  def greater_than?(comparison)
    self.rank_value > comparison.rank_value ? true : false
  end

  def ==(comparison)
    self.rank == comparison.rank && self.suit == comparison.suit
  end

  protected

  def rank_value
    RANKS.index(self.rank)
  end

end
