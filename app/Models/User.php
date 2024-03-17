<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\HasOne;
use App\Models\UserSubscription;
use Illuminate\Support\Facades\DB;
use Auth;


class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    /**
     * Get the user associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function lastActiveUserSusbcription(): HasOne
    {
        return $this->hasOne(UserSubscription::class, 'user_id', 'id')->wherePaymentStatus('paid')->latest();
    }

    public function getIsActiveAtrribute() {
        $dateNow = Carbon::now();
        $dateExpired = Carbon::create($this->lastActiveUserSusbcription->expired_date);
        return $dateNow->lessThanOrEqualTo($dateExpired);
    }

    public function getLastActiveUserSubscription() {
        return DB::table('user_subscriptions')->join('users', 'user_subscriptions.user_id', '=', 'users.id')
            ->join('subscription_plans', 'user_subscriptions.subscription_plan_id', '=', 'subscription_plans.id')
            ->where('user_subscriptions.payment_status', 'paid')
            ->where('user_subscriptions.user_id', Auth::user()->id)
            ->first();
    }    

    public function activePlan() {
        $getLastActiveUserSubscription = Auth::user()->getLastActiveUserSubscription();
        // User::getLastActiveUserSubscription();
        $activePlan = $getLastActiveUserSubscription ? $getLastActiveUserSubscription : null;
        if (!$activePlan) {
            return null;
        }
        $lastDay = Carbon::parse($activePlan->updated_at)->addMonths($activePlan->active_period_in_months);
        $activeDay = Carbon::parse($activePlan->updated_at)->diffInDays($lastDay);
        $remainingActiveDays = Carbon::parse($activePlan->expired_date)->diffIndays(Carbon::now());

        return [
            'active_plan' => $activePlan,
            'last_day' => $lastDay,
            'active_day' => $activeDay,
            'remaining_active_days' => $remainingActiveDays
        ];
    }

}
