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
                'video_url' => 'https://www.youtube.com/watch?v=Cg3GdSjhvLs&t=182s&pp=ygUJb25lIHBpZWNl',
                'thumbnail' => 'https://dorangadget.com/wp-content/uploads/2023/05/Karakter-One-Piece-63.jpg',
                'rating' => 8,
                'is_featured' => true,
            ],
            [
                'name' => 'Black Clovers',  
                'slug' => 'black-clovers',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=Cg3GdSjhvLs&t=182s&pp=ygUJb25lIHBpZWNl',
                'thumbnail' => 'https://media.suara.com/pictures/970x544/2023/07/24/99336-black-clover-imdb.jpg',
                'rating' => 7,
                'is_featured' => false,
            ],
            [
                'name' => 'Demon Slayers',
                'slug' => 'demon-slayers',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=sOAkrFoBmSQ&pp=ygUMZGVtb24gc2xheWVy',
                'thumbnail' => 'https://img2.beritasatu.com/cache/beritasatu/960x620-3/2023/04/1681109340-700x532.webp',
                'rating' => 7,
                'is_featured' => false,
            ]
        ];

        Movies::insert($movies);

    }
}
