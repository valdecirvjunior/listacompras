class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
  
  before_filter :allow_cross_domain_access
  def allow_cross_domain_access
    response.headers["Access-Control-Allow-Origin"] = "*"  
    response.headers["Access-Control-Allow-Methods"] = "*"
    response.headers["Access-Control-Request-Methods"] = "*"
  	response.headers["Access-Control-Allow-Headers"] = "*"
  end

end
