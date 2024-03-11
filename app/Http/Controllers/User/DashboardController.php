<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Movies;
use App\Models\User;
// use Inertia\Inertia;    

class DashboardController extends Controller
{
    public function index() {
        $featureMovies = Movies::whereis_featured(true)->get();
        // $featureMovie = Movies::where('is_featured', true)->get();
        $movies = Movies::all();
        $user = new User();

        return inertia('User/Dashboard/Index', [
            'featureMovies' => $featureMovies,
            'movies' => $movies,
            // 'lastActiveUserSubscription' => $user->getLastActiveUserSubscription(),
            'activePlan' => $user->activePlan()
        ]);
    }
}
