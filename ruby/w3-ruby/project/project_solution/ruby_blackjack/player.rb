class Player

  attr_accessor :cash, :initial_balance

  $initial_balance = 100
  $default_bet = 10

  def initialize
    @cash = initial_balance
    @bet = default_bet
  end

  def initial_balance
    $initial_balance
  end

  def default_bet
    $default_bet
  end

  def cash_on_hand
    @cash
  end
end
