<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movies;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'One Piece',
                'slug' => 'one-piece',
                'category' => 'Action Movie',
                'video_url' => 'http://youtube.com/watch?v=one-piece',
                'thumbnail' => 'http://www.youtube.com/watch?v=one-piece',
                'rating' => 8,
                'is_featured' => true,
            ],
            [
                'name' => 'Black Clovers',  
                'slug' => 'black-clovers',
                'category' => 'Action',
                'video_url' => 'http://youtube.com/watch?v=black-clover',
                'thumbnail' => 'http://www.youtube.com/watch?v=black-clover',
                'rating' => 7,
                'is_featured' => false,
            ],
            [
                'name' => 'Demon Slayers',
                'slug' => 'demon-slayers',
                'category' => 'Action',
                'video_url' => 'http://youtube.com/watch?v=demon-slayers',
                'thumbnail' => 'http://www.youtube.com/watch?v=demon-slayers',
                'rating' => 7,
                'is_featured' => false,
            ]
        ];

        Movies::insert($movies);

    }
}
