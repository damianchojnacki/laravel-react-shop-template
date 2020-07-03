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

    protected $fillable = [
        'public_id'
    ];

    protected $appends = [
        'src'
    ];

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
        return self::getImageSrc($this->public_id);
    }

    public static function getImageSrc($public_id){
        return Cloudder::show($public_id);
    }

    public function imageDelete(){
        Cloudder::delete($this->public_id);
    }

}
