class ApplicationController < ActionController::API 
    include ActionController::MimeResponds

    def getProduct
        company = {hello: 1}
        if stale?(etag: company)
            respond_to do |format|
                format.json { render(json: "fdsfdsfd" ) }
            end
        end
    end

    
end