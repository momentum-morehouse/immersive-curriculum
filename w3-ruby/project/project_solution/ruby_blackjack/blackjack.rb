require_relative 'deck'
require_relative 'player'
require_relative 'dealer'
require_relative 'lib/language_helper'
require 'pry'

class BlackjackGame

  BET = 10

  def initialize(deck=Deck.new, player=Player.new, dealer=Dealer.new)
    @deck = deck
    @deck.shuffle
    @player = player
    @player_hand = []
    @dealer = dealer
    @dealer_hand = []
    greeting
    play
  end

  def play
    if @player_hand.empty?
      initial_deal
      setup
    else
      deal
    end
  end

  def greeting
    "Hello. Let's play Blackjack."
    "\n You have $#{@player.cash} and bet $#{BET}"
  end

  def setup
    query_player
    get_player_next_move
  end

  def query_player
    puts "You have a #{LanguageHelper.to_sentence(display_hand)} in your hand.
      #{display_total(@player_hand)}"
    puts "Do you want to (h)it or (s)tand?"
  end

  def initial_deal
    2.times do
      @player_hand << @deck.draw
      @dealer_hand << @deck.draw
    end
  end

  def deal
    @deck.draw
  end

  def display_hand
    @player_hand.map {|card| card.rank.to_s}
  end

  def hand_total(cards)
    total = 0
    cards.each do |card|
      total += card.value
    end
    total
  end

  def display_total(hand)
    "Your total is #{hand_total(hand)}."
  end

  def get_player_next_move
    player_input = gets.chomp.downcase
    if player_input == "h"
      hit
    elsif player_input == "s"
      stand
    else
      puts "That is not a valid option. Please choose either 'h' or 's'"
    end
  end

  def hit
    @player_hand << deal
    puts "You now have a #{LanguageHelper.to_sentence(display_hand)} in your hand.
      #{display_total(@player_hand)}"
    while hand_total(@player_hand) < 21
      query_player
      get_player_next_move
    end
    if hand_total(@player_hand) == 21
      puts "Blackjack!"
    else
      puts "BUST! You lose."
    end
    play_again?
  end

  def stand
    puts "You stand. #{display_total(@player_hand)}"
    show_dealer_status
    while hand_total(@dealer_hand) < 17
      @dealer_hand << @deck.draw
    end
    eval_win_or_lose
  end

  def show_dealer_status

  end

  def eval_win_or_lose
    if hand_total(@dealer_hand) > 21 || hand_total(@dealer_hand) > hand_total(@player_hand)
      puts "you win!"
    else
      puts "Dealer wins!"
    end
    play_again?
  end

  def play_again?
    puts "Play again? (y)es or (n)o"
    response = gets.chomp.downcase
    if response == "y"
      reset_game
      play
    elsif response == "n"
      puts "See you next time then!"
      exit
    else
      puts "Sorry, didn't catch that. Please type (y) for yes or (n) for no."
    end
  end

  def reset_game
    @deck.reset
    @player_hand = []
    @dealer_hand = []
  end

end