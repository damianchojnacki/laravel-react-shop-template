<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\File\File;

class Image extends Model{

    protected $hidden = [
        'id',
        'imageable_id',
        'imageable_type',
        'created_at',
        'updated_at',
    ];

    protected $fillable = [
        'path'
    ];

    protected $appends = [
        'src'
    ];

    /**
     * Get the owning imageable model.
     */
    public function imageable(){
        return $this->morphTo();
    }

    public function getSrcAttribute(): string
    {
        return Storage::url($this->path);
    }

    public static function imageUpload(File $image, $prefix = null): string
    {
        $path = 'images/' . ($prefix ? "$prefix/" : '') . Str::uuid() . '.' . $image->getExtension();

        Storage::put($path, $image->getContent());

        return $path;
    }

    public function imageDelete(): bool
    {
        return $this->path && Storage::delete($this->path);
    }
}
