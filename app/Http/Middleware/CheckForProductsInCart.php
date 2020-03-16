<?php

namespace App\Http\Middleware;

use App\Cart;
use App\Flash;
use Closure;

class CheckForProductsInCart
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(Cart::isEmpty()){
            Flash::error('Your cart is empty!');

            return redirect('/');
        }

        return $next($request);
    }
}
