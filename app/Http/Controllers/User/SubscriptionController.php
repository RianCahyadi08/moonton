<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Auth;
use Carbon\Carbon;

class SubscriptionController extends Controller
{
    public function index() {
        $subscriptionPlans = SubscriptionPlan::all();
        // return $subscriptionPlan;
        return inertia('User/Dashboard/SubscriptionPlan/Index', [
            'subscriptionPlans' => $subscriptionPlans
        ]);
    }

    public function userSubscribe(Request $requst, SubscriptionPlan $subscriptionPlan) {
        $data = [
            'user_id' => auth::id(),    
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now()->addMonths($subscriptionPlan->active_period_in_months),
            'payment_status' => 'paid',
            'snapToken'
        ];

        $insertUserSubscription = UserSubscription::create($data);

        return redirect(route('user.dashboard.index'));
    }
}
