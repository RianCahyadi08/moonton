<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Auth;

class CheckUserSubscription
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $status): Response
    {
        if ($status == 'true' && !Auth::user()->activePlan()) {
            // $test = [
            //     'test' => 1,
            // ];
            // dd($status);
            // dd(!Auth::user()->activePlan());
            // dd($test);
            return redirect(route('user.dashboard.subscription-plan.index'));
        } else if ($status == 'false' && Auth::user()->activePlan()) {
            return redirect(route('user.dashboard.index'));
        }

        return $next($request);
    }
}
