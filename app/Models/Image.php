<?php

namespace App;

use Cloudder;
use Illuminate\Database\Eloquent\Model;

class Image extends Model{

    protected $hidden = [
        'id',
        'imageable_id',
        'imageable_type',
        'created_at',
        'updated_at',
    ];
    protected $appends = ['src'];

    public static function imageUpload($image, $prefix = null){
        $id = Cloudder::upload($image, null, [
            'folder' => $prefix,
        ])->getPublicId();

        return $id;
    }

    /**
     * Get the owning imageable model.
     */
    public function imageable(){
        return $this->morphTo();
    }

    public function getSrcAttribute(){
        return self::getImageSrc($this->url);
    }

    public static function getImageSrc($publicId){
        return Cloudder::show($publicId);
    }

    public function imageDelete(){
        return config('app.env') !== 'testing' ? Cloudder::delete($this->url) : null;
    }

}
