class Api::SongsController < ApplicationController

    def index
        redner json: Song.all
    end

    def create
        song = Song.new(song_params)
        if song.save
            render json: song_params
        else
            render json: { errors: song.error }, status: :unprocessable_entity
        end
    end

    def update
        song = Song.find(params[id])
        song.update(complete: !song.complete)
        render json: item
    end

    def destroy
        Song.find(params[:id]).destroy
        render json: {message: 'Song deleted'}
    end

    private

    def song_params
        params.require(:song).permit(:name, :artist)
    end







end
