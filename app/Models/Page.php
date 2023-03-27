<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Page extends Model
{
    use HasFactory, Sluggable;

    protected $fillable = [
        'title',
        'subtitle',
        'body',
        'slug',
        'seo_title',
        'meta_description',
        'meta_keywords',
        'type_page_landing',
    ];
    protected $quarded = [];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

}
