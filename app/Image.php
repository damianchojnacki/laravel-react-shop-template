<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cloudder;

class Image extends Model
{
    protected $hidden = ['id', 'imageable_id', 'imageable_type','created_at', 'updated_at'];
    protected $appends = ['src'];

    /**
     * Get the owning imageable model.
     */
    public function imageable()
    {
        return $this->morphTo();
    }

    public static function getImageSrc($publicId){
        return Cloudder::show($publicId);
    }

    public static function imageUpload($image, $prefix = null){
        if(config('app.env') !== 'testing')
            $id = Cloudder::upload($image, null, [
                'folder' => $prefix
            ])->getPublicId();
        else
            $id = null;

        return $id;
    }

    public function getSrcAttribute(){
        return self::getImageSrc($this->url);
    }

    public function imageDelete(){
        return config('app.env') !== 'testing' ? Cloudder::delete($this->url) : null;
    }
}
