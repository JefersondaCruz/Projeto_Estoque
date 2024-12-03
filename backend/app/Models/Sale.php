<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_id',
        'quantity',
        'sale_date',
        'user_id',
        'total_price',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relacionamento com produtos
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}

