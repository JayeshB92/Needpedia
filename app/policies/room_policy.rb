class RoomPolicy < ApplicationPolicy

  def index?
    true
  end

  def show?
    true
  end

  def create?
    true
  end

  def new?
    true
  end

  def close?
    true
  end

  def edit?
    true
  end

  def update?
    true
  end

end