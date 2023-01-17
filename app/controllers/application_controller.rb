class ApplicationController < ActionController::API
  include ActionController::Cookies

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
