# Luxe Scent Emporium - Supabase Setup Guide

## Quick Setup Instructions

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Wait for setup to complete

### 2. Run Database Schema

1. Go to SQL Editor in your Supabase dashboard
2. Copy and paste the contents of `setup/supabase-schema.sql`
3. Click "Run" to execute

### 3. Get Environment Variables

1. Go to Project Settings > API
2. Copy your project URL and anon key
3. Add to your environment:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 4. Enable Authentication

1. Go to Authentication > Settings
2. Enable Email auth
3. Configure any social providers if needed

### 5. Storage Setup (Optional)

1. Go to Storage
2. Create a bucket called "product-images"
3. Set policies for public read access

## Features Ready to Use

✅ **Product Catalog** - Browse luxury perfumes  
✅ **Shopping Cart** - Add/remove items with local storage fallback  
✅ **Responsive Design** - Beautiful on all devices  
✅ **Demo Data** - Works without backend connection

## What's Included

- **Home Page**: Hero, categories, featured products, testimonials
- **Products Page**: Full catalog with search and filters
- **Cart Page**: Shopping cart management
- **Checkout Page**: Order placement with card/COD options
- **Database Schema**: Complete Supabase setup
- **Demo Data**: Fallback data when offline

The app works beautifully with demo data and will seamlessly switch to Supabase once connected!
