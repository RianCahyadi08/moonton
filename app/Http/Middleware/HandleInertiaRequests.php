<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Auth;
use Carbon\Carbon;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
        ];
    }

    private function activePlan() {
        $activePlan = Auth::user() ? Auth::user()->lastActiveUserSusbcription() : null;
        if (!$activePlan) {
            return null;
        }
        $lastDay = Carbon::parse($activePlan->updated_at)->addMonths($activePlan->subscriptionPlan->active_period_in_months);
        $activeDays = Carbon::parse($activePlan->updated_at)->diffInDays($lastDay);
        $remainingActiveDays = Carbon::parse($activePlan->expired_date)->diffIndays(Carbon::now());
    
        return [
            'name' => $activePlan->subscriptionPlan->name,
            'activeDays' => $activeDays,
            'reaminingActiveDays' => $remainingActiveDays
        ];
    }

}
