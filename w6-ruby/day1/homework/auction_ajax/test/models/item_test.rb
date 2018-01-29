require 'test_helper'

class ItemTest < ActiveSupport::TestCase
  test "highest bid" do
    Bid.create(item: items(:hippo), amount: 500)
    Bid.create(item: items(:hippo), amount: 600)
    Bid.create(item: items(:hippo), amount: 900)
    assert_equal 900, items(:hippo).highest_bid_amount
  end

  test "bid cannot be created without fields" do
    refute Item.new.save
  end
end
