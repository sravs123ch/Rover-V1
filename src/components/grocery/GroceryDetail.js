import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Comments from "../comments";
import { GlobalContext } from "../../context/GlobalContext";

import Apple from "../../assets/grocery/apple.png";
import Bread from "../../assets/grocery/bread.png";
import OrganicMilk from "../../assets/grocery/milk.png";
import Carrot from "../../assets/grocery/carret.png";
import Tomatoes from "../../assets/grocery/tomatos.png";
import Potatoes from "../../assets/grocery/potatos.png";
import Bananas from "../../assets/grocery/bananas.png";
import Cucumber from "../../assets/grocery/cucumber.png";
import Eggplant from "../../assets/grocery/eggplant.png";
import Spinach from "../../assets/grocery/spinach.png";
import Lettuce from "../../assets/grocery/lettuce.png";
import Grapes from "../../assets/grocery/grapes.png";
import Pineapple from "../../assets/grocery/pineapple.png";
import Mangoes from "../../assets/grocery/mangoes.png";
import Oranges from "../../assets/grocery/oranges.png";
import Red_Onions from "../../assets/grocery/red_onions.png";
import Green_beans from "../../assets/grocery/green_beans.png";
import Cabbage from "../../assets/grocery/cabbage.png";
import SweetCorn from "../../assets/grocery/sweetcorn.png";
import Forzen_Peas from "../../assets/grocery/frozen peas.png";
import Surf_excel from "../../assets/grocery/surfexcell.png";
import Domex from "../../assets/grocery/domex.png";
import Fabuloso from "../../assets/grocery/Fabuloso All-Purpose Cleaner.png";
import Harpick from "../../assets/grocery/Harpic Bathroom Cleaner.png";
import Vim_Dishwash from "../../assets/grocery/Vim Dishwash Liquid.png";
import Bowl_Fresh from "../../assets/grocery/Bowl Fresh Toilet Cleaner Tablets.png";
import Cif_Cream from "../../assets/grocery/Cif Cream Cleaner.png";
import Lysol from "../../assets/grocery/Lysol Disinfectant Spray.png";
import Pine_Sol from "../../assets/grocery/Pine-Sol Multi-Surface Cleaner.png";
import Muscle_Glass from "../../assets/grocery/Mr. Muscle Glass Cleaner.png";
import Tata_Salt from "../../assets/grocery/Tata Salt.png";
import Maggi_Noodles from "../../assets/grocery/Maggi Noodles.png";
import Sunflower_Oil from "../../assets/grocery/Sunflower Oil.png";
import Pepsodent from "../../assets/grocery/Pepsodent Toothpaste.png";
import Nescafe from "../../assets/grocery/Nescafe Instant Coffee.png";
import Lays from "../../assets/grocery/Lay's Potato Chips.png";
import Kelloggs from "../../assets/grocery/Kellogg's Cornflakes.png";
import Tata_tea from "../../assets/grocery/Tata Tea.png";
import Dove_Shampoo from "../../assets/grocery/Dove Shampoo.png";
import Harpic_Toilet from "../../assets/grocery/Harpic Toilet Cleaner.png";
import Whirlpool from "../../assets/grocery/Whirlpool Dishwashing Liquid.png";
import Scotch_brite from "../../assets/grocery/Scotch Brite Scrub Sponge.png";
import Vim_Dishwash_bar from "../../assets/grocery/Vim Dishwash Bar.png";
import Bournvita from "../../assets/grocery/Bournvita.png";
import Aex_deo from "../../assets/grocery/Axe Deodorant.png";
import Nivea_body from "../../assets/grocery/Nivea Body Lotion.png";
import Garnier_Hair from "../../assets/grocery/Garnier Hair Color.png";
import Sunsilk_Shampoo from "../../assets/grocery/Sunsilk Shampoo.png";
import Vaseline_Petroleum from "../../assets/grocery/Vaseline Petroleum Jelly.png";
import CocoCola from "../../assets/grocery/Coca Cola.png";

// Sample products array

const responsive = {
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(GlobalContext);
  const { buyNowCheckout } = useContext(GlobalContext);
  const groceryData = [
    {
      id: 1,
      name: "Fresh Apples (1kg)",
      originalPrice: 120,
      discountedPrice: 100,
      discount: "16.7%",
      image: Apple,
      category: "Fruits",
      description:
        "Crisp and fresh apples sourced from organic farms. Perfect for snacking or baking.",
      stock: 50,
      ratings: 4.8,
      reviews: [
        { user: "John Doe", comment: "Very fresh and tasty!", rating: 5 },
        {
          user: "Jane Smith",
          comment: "Good quality, will buy again.",
          rating: 4,
        },
      ],
    },
    {
      id: 2,
      name: "Whole Wheat Bread (500g)",
      originalPrice: 50,
      discountedPrice: 45,
      discount: "10%",
      image: Bread,
      category: "Bakery",
      description: "Soft and healthy whole wheat bread, baked fresh daily.",
      stock: 30,
      ratings: 4.5,
      reviews: [
        {
          user: "Alice Johnson",
          comment: "Great bread for sandwiches.",
          rating: 5,
        },
        {
          user: "Mark Lee",
          comment: "Could be a bit softer, but still good.",
          rating: 4,
        },
      ],
    },
    {
      id: 3,
      name: "Organic Milk (1L)",
      originalPrice: 80,
      discountedPrice: 70,
      discount: "12.5%",
      image: OrganicMilk,
      category: "Dairy",
      description: "Pure and organic milk, sourced from grass-fed cows.",
      stock: 20,
      ratings: 4.9,
      reviews: [
        {
          user: "Sophia Brown",
          comment: "Delicious and fresh, highly recommend!",
          rating: 5,
        },
        { user: "Ethan Wilson", comment: "Good quality milk.", rating: 4 },
      ],
    },
    {
      id: 4,
      name: "Carrots (1kg)",
      originalPrice: 60,
      discountedPrice: 50,
      discount: "16.7%",
      image: Carrot,
      category: "Vegetables",
      description: "Crunchy and sweet carrots, ideal for salads and cooking.",
      stock: 40,
      ratings: 4.7,
      reviews: [
        { user: "Olivia Davis", comment: "Perfect for my soups!", rating: 5 },
        {
          user: "Liam Martinez",
          comment: "Good quality for the price.",
          rating: 4,
        },
      ],
    },
    {
      id: 5,
      name: "Tomatoes (500g)",
      originalPrice: 40,
      discountedPrice: 35,
      discount: "12.5%",
      image: Tomatoes,
      category: "Vegetables",
      description: "Juicy and ripe tomatoes, great for cooking and salads.",
      stock: 60,
      ratings: 4.6,
      reviews: [
        { user: "Emma Clark", comment: "Very fresh and tasty!", rating: 5 },
        { user: "Noah Lewis", comment: "Affordable and fresh.", rating: 4 },
      ],
    },
    {
      id: 6,
      name: "Potatoes (1kg)",
      originalPrice: 45,
      discountedPrice: 40,
      discount: "11.1%",
      image: Potatoes,
      category: "Vegetables",
      description: "Versatile and fresh potatoes, perfect for any dish.",
      stock: 80,
      ratings: 4.5,
      reviews: [
        { user: "Lucas Green", comment: "Great value for money.", rating: 4 },
        { user: "Sophia White", comment: "Nice and fresh.", rating: 5 },
      ],
    },
    {
      id: 7,
      name: "Bananas (1kg)",
      originalPrice: 90,
      discountedPrice: 85,
      discount: "5.6%",
      image: Bananas,
      category: "Fruits",
      description: "Sweet and ripe bananas, a healthy snack option.",
      stock: 100,
      ratings: 4.6,
      reviews: [
        { user: "Olivia King", comment: "Very tasty and fresh.", rating: 5 },
        {
          user: "Noah Brown",
          comment: "A bit small but good quality.",
          rating: 4,
        },
      ],
    },
    {
      id: 8,
      name: "Cucumber (500g)",
      originalPrice: 30,
      discountedPrice: 25,
      discount: "16.7%",
      image: Cucumber,
      category: "Vegetables",
      description: "Fresh and crisp cucumbers, great for salads.",
      stock: 50,
      ratings: 4.4,
      reviews: [
        { user: "Emma Hill", comment: "Very fresh, loved it!", rating: 5 },
        { user: "Liam Adams", comment: "Good for the price.", rating: 4 },
      ],
    },
    {
      id: 9,
      name: "Eggplant (1kg)",
      originalPrice: 50,
      discountedPrice: 40,
      discount: "20%",
      image: Eggplant,
      category: "Vegetables",
      description: "Fresh eggplants perfect for grilling and cooking.",
      stock: 70,
      ratings: 4.3,
      reviews: [
        {
          user: "Isabella Scott",
          comment: "Good quality and taste.",
          rating: 4,
        },
        { user: "Elijah Harris", comment: "Loved the freshness.", rating: 5 },
      ],
    },
    {
      id: 10,
      name: "Spinach (500g)",
      originalPrice: 35,
      discountedPrice: 30,
      discount: "14.3%",
      image: Spinach,
      category: "Vegetables",
      description: "Nutritious and fresh spinach, ideal for healthy meals.",
      stock: 60,
      ratings: 4.7,
      reviews: [
        {
          user: "Amelia Carter",
          comment: "Very fresh and healthy.",
          rating: 5,
        },
        { user: "Henry Evans", comment: "Good quality spinach.", rating: 4 },
      ],
    },
    {
      id: 11,
      name: "Lettuce (1kg)",
      originalPrice: 60,
      discountedPrice: 55,
      discount: "8.3%",
      image: Lettuce,
      category: "Vegetables",
      description: "Crisp and fresh lettuce, perfect for salads and wraps.",
      stock: 40,
      ratings: 4.5,
      reviews: [
        {
          user: "William Torres",
          comment: "Very fresh and crunchy!",
          rating: 5,
        },
        {
          user: "Charlotte Rivera",
          comment: "Good value for money.",
          rating: 4,
        },
      ],
    },
    {
      id: 12,
      name: "Grapes (500g)",
      originalPrice: 120,
      discountedPrice: 110,
      discount: "8.3%",
      image: Grapes,
      category: "Fruits",
      description: "Juicy and sweet grapes, perfect for snacking.",
      stock: 50,
      ratings: 4.6,
      reviews: [
        {
          user: "Evelyn Morris",
          comment: "Sweet and fresh, loved them!",
          rating: 5,
        },
        {
          user: "Mason Hughes",
          comment: "Good quality but slightly expensive.",
          rating: 4,
        },
      ],
    },
    {
      id: 13,
      name: "Pineapple (1kg)",
      originalPrice: 150,
      discountedPrice: 140,
      discount: "6.7%",
      image: Pineapple,
      category: "Fruits",
      description:
        "Tropical and juicy pineapples, perfect for desserts or fresh consumption.",
      stock: 25,
      ratings: 4.7,
      reviews: [
        { user: "Ella Green", comment: "Sweet and fresh!", rating: 5 },
        {
          user: "Mike Brown",
          comment: "Good quality, will purchase again.",
          rating: 4,
        },
      ],
    },
    {
      id: 14,
      name: "Mangoes (1kg)",
      originalPrice: 200,
      discountedPrice: 180,
      discount: "10%",
      image: Mangoes,
      category: "Fruits",
      description: "Ripe and sweet mangoes, sourced from premium orchards.",
      stock: 40,
      ratings: 4.9,
      reviews: [
        { user: "Sophie Turner", comment: "Absolutely delicious!", rating: 5 },
        { user: "Daniel Lee", comment: "Very fresh and tasty.", rating: 4 },
      ],
    },
    {
      id: 15,
      name: "Oranges (1kg)",
      originalPrice: 100,
      discountedPrice: 90,
      discount: "10%",
      image: Oranges,
      category: "Fruits",
      description: "Fresh and juicy oranges, rich in vitamin C.",
      stock: 35,
      ratings: 4.8,
      reviews: [
        {
          user: "Olivia Martinez",
          comment: "Great for fresh juice!",
          rating: 5,
        },
        { user: "Jack White", comment: "Good quality and taste.", rating: 4 },
      ],
    },
    {
      id: 16,
      name: "Red Onions (1kg)",
      originalPrice: 80,
      discountedPrice: 70,
      discount: "12.5%",
      image: Red_Onions,
      category: "Vegetables",
      description: "Fresh and flavorful red onions, perfect for cooking.",
      stock: 60,
      ratings: 4.6,
      reviews: [
        { user: "Emma Brown", comment: "Great quality onions.", rating: 5 },
        { user: "Liam Davis", comment: "Nice and fresh.", rating: 4 },
      ],
    },
    {
      id: 17,
      name: "Green Beans (500g)",
      originalPrice: 60,
      discountedPrice: 50,
      discount: "16.7%",
      image: Green_beans,
      category: "Vegetables",
      description: "Tender and fresh green beans, perfect for stir-fries.",
      stock: 45,
      ratings: 4.7,
      reviews: [
        {
          user: "Sophia Wilson",
          comment: "Very fresh and crunchy.",
          rating: 5,
        },
        { user: "Ethan Harris", comment: "Good value for money.", rating: 4 },
      ],
    },
    {
      id: 18,
      name: "Cabbage (1kg)",
      originalPrice: 45,
      discountedPrice: 40,
      discount: "11.1%",
      image: Cabbage,
      category: "Vegetables",
      description: "Fresh green cabbage, ideal for salads and stir-fries.",
      stock: 50,
      ratings: 4.5,
      reviews: [
        { user: "Ella Green", comment: "Crisp and fresh!", rating: 5 },
        {
          user: "Mike Brown",
          comment: "Good quality, will buy again.",
          rating: 4,
        },
      ],
    },
    {
      id: 19,
      name: "Sweet Corn (500g)",
      originalPrice: 55,
      discountedPrice: 50,
      discount: "9.1%",
      image: SweetCorn,
      category: "Vegetables",
      description: "Sweet and tender corn, perfect for boiling or roasting.",
      stock: 30,
      ratings: 4.6,
      reviews: [
        { user: "Olivia Martinez", comment: "Great for snacks!", rating: 5 },
        { user: "Jack White", comment: "Nice and fresh.", rating: 4 },
      ],
    },
    {
      id: 20,
      name: "Frozen Peas (1kg)",
      originalPrice: 120,
      discountedPrice: 100,
      discount: "16.7%",
      image: Forzen_Peas,
      category: "Vegetables",
      description: "Convenient and fresh frozen peas, perfect for quick meals.",
      stock: 35,
      ratings: 4.8,
      reviews: [
        { user: "Sophia Wilson", comment: "Easy to use and fresh.", rating: 5 },
        {
          user: "Ethan Harris",
          comment: "Good quality frozen peas.",
          rating: 4,
        },
      ],
    },
    // Cleaning products
    {
      id: 21,
      name: "Surf Excel Detergent Powder (1kg)",
      originalPrice: 250,
      discountedPrice: 230,
      discount: "8%",
      image: Surf_excel,
      category: "Cleaning",
      description: "Powerful detergent for stain removal.",
      stock: 50,
      ratings: 4.5,
      reviews: [
        {
          user: "John Doe",
          comment: "Works great on tough stains!",
          rating: 5,
        },
        { user: "Jane Smith", comment: "Good value for money.", rating: 4 },
      ],
    },
    {
      id: 22,
      name: "Domex Toilet Cleaner (500ml)",
      originalPrice: 75,
      discountedPrice: 60,
      discount: "20%",
      image: Domex,
      category: "Cleaning",
      description: "Effective cleaner for a hygienic toilet.",
      stock: 40,
      ratings: 4.7,
      reviews: [
        {
          user: "Alice Johnson",
          comment: "Cleans very well and leaves a fresh scent.",
          rating: 5,
        },
        {
          user: "Bob Brown",
          comment: "Good quality, but a bit strong.",
          rating: 4,
        },
      ],
    },
    {
      id: 23,
      name: "Fabuloso All-Purpose Cleaner (1L)",
      originalPrice: 120,
      discountedPrice: 100,
      discount: "16.7%",
      image: Fabuloso,
      category: "Cleaning",
      description: "Multi-purpose cleaner with a pleasant fragrance.",
      stock: 60,
      ratings: 4.6,
      reviews: [
        {
          user: "Megan White",
          comment: "Smells amazing and works great.",
          rating: 5,
        },
        {
          user: "Chris Green",
          comment: "Does the job, but the scent is too strong for me.",
          rating: 3,
        },
      ],
    },
    {
      id: 24,
      name: "Harpic Bathroom Cleaner (500ml)",
      originalPrice: 100,
      discountedPrice: 85,
      discount: "15%",
      image: Harpick,
      category: "Cleaning",
      description: "Cleans and disinfects bathroom surfaces effectively.",
      stock: 25,
      ratings: 4.9,
      reviews: [
        {
          user: "Emily Davis",
          comment: "Best cleaner for bathroom surfaces!",
          rating: 5,
        },
        {
          user: "Tom Wilson",
          comment: "Highly effective but a bit expensive.",
          rating: 4,
        },
      ],
    },
    {
      id: 25,
      name: "Vim Dishwash Liquid (500ml)",
      originalPrice: 50,
      discountedPrice: 40,
      discount: "20%",
      image: Vim_Dishwash,
      category: "Cleaning",
      description: "Effective dishwashing liquid for a sparkling clean.",
      stock: 45,
      ratings: 4.3,
      reviews: [
        {
          user: "Rachel Green",
          comment: "Cleans well, but the scent is a bit too strong.",
          rating: 4,
        },
        {
          user: "Monica Geller",
          comment: "Good for everyday cleaning.",
          rating: 5,
        },
      ],
    },
    {
      id: 26,
      name: "Bowl Fresh Toilet Cleaner Tablets (Pack of 6)",
      originalPrice: 180,
      discountedPrice: 150,
      discount: "16.7%",
      image: Bowl_Fresh,
      category: "Cleaning",
      description: "Toilet cleaner tablets for a fresh and clean toilet.",
      stock: 30,
      ratings: 4.4,
      reviews: [
        {
          user: "Phoebe Buffay",
          comment: "Works well, and the toilet stays fresh.",
          rating: 5,
        },
        {
          user: "Ross Geller",
          comment: "Does its job, but I wish it lasted longer.",
          rating: 4,
        },
      ],
    },
    {
      id: 27,
      name: "Cif Cream Cleaner (500ml)",
      originalPrice: 120,
      discountedPrice: 100,
      discount: "16.7%",
      image: Cif_Cream,
      category: "Cleaning",
      description: "Cleans tough stains on all surfaces with ease.",
      stock: 50,
      ratings: 4.6,
      reviews: [
        {
          user: "Chandler Bing",
          comment: "Cleans great and smells good too!",
          rating: 5,
        },
        {
          user: "Joey Tribbiani",
          comment: "Best cream cleaner for the kitchen!",
          rating: 4,
        },
      ],
    },
    {
      id: 28,
      name: "Lysol Disinfectant Spray (400ml)",
      originalPrice: 200,
      discountedPrice: 180,
      discount: "10%",
      image: Lysol,
      category: "Cleaning",
      description: "Kills germs and bacteria, providing a fresh scent.",
      stock: 40,
      ratings: 4.8,
      reviews: [
        { user: "Rachel Green", comment: "Love the fresh scent!", rating: 5 },
        {
          user: "Monica Geller",
          comment: "Very effective in cleaning.",
          rating: 4,
        },
      ],
    },
    {
      id: 29,
      name: "Pine-Sol Multi-Surface Cleaner (1L)",
      originalPrice: 130,
      discountedPrice: 110,
      discount: "15.4%",
      image: Pine_Sol,
      category: "Cleaning",
      description: "Multi-surface cleaner with a strong, clean scent.",
      stock: 55,
      ratings: 4.5,
      reviews: [
        {
          user: "Joey Tribbiani",
          comment: "Great cleaner, works on multiple surfaces.",
          rating: 5,
        },
        {
          user: "Phoebe Buffay",
          comment: "The scent is a little too strong for me.",
          rating: 4,
        },
      ],
    },
    {
      id: 30,
      name: "Mr. Muscle Glass Cleaner (500ml)",
      originalPrice: 150,
      discountedPrice: 130,
      discount: "13.3%",
      image: Muscle_Glass,
      category: "Cleaning",
      description: "Glass cleaner that leaves surfaces streak-free.",
      stock: 60,
      ratings: 4.7,
      reviews: [
        {
          user: "Chandler Bing",
          comment: "Best glass cleaner I've used.",
          rating: 5,
        },
        {
          user: "Ross Geller",
          comment: "Leaves no streaks and smells fresh.",
          rating: 4,
        },
      ],
    },
    // Snacks and beverages
    {
      id: 31,
      name: "Tata Salt (1kg)",
      originalPrice: 25,
      discountedPrice: 20,
      discount: "20%",
      image: Tata_Salt,
      category: "Snacks",
      description: "Premium iodized salt for daily use.",
      stock: 50,
      ratings: 4.6,
      reviews: [
        { user: "Rachel Green", comment: "Great quality salt.", rating: 5 },
        {
          user: "Monica Geller",
          comment: "Perfect for all my cooking.",
          rating: 4,
        },
      ],
    },
    {
      id: 32,
      name: "Maggi Noodles (Pack of 5)",
      originalPrice: 75,
      discountedPrice: 65,
      discount: "13.3%",
      image: Maggi_Noodles,
      category: "Snacks",
      description: "Instant noodles for a quick and tasty meal.",
      stock: 120,
      ratings: 4.7,
      reviews: [
        { user: "Phoebe Buffay", comment: "Quick and yummy snack.", rating: 5 },
        {
          user: "Joey Tribbiani",
          comment: "Love the taste, love the noodles!",
          rating: 4,
        },
      ],
    },
    {
      id: 33,
      name: "Sunflower Oil (1L)",
      originalPrice: 130,
      discountedPrice: 110,
      discount: "15.4%",
      image: Sunflower_Oil,
      category: "Cooking",
      description: "High-quality sunflower oil for all cooking needs.",
      stock: 40,
      ratings: 4.5,
      reviews: [
        {
          user: "Chandler Bing",
          comment: "Good quality oil, healthy choice.",
          rating: 4,
        },
        { user: "Ross Geller", comment: "Perfect for deep frying.", rating: 5 },
      ],
    },
    {
      id: 34,
      name: "Pepsodent Toothpaste (150g)",
      originalPrice: 55,
      discountedPrice: 45,
      discount: "18.2%",
      image: Pepsodent,
      category: "Toiletries",
      description: "Refreshing toothpaste with a cool mint flavor.",
      stock: 80,
      ratings: 4.8,
      reviews: [
        { user: "Monica Geller", comment: "Best toothpaste ever!", rating: 5 },
        {
          user: "Rachel Green",
          comment: "Leaves my mouth feeling fresh.",
          rating: 4,
        },
      ],
    },
    {
      id: 35,
      name: "Nescafe Instant Coffee (100g)",
      originalPrice: 150,
      discountedPrice: 130,
      discount: "13.3%",
      image: Nescafe,
      category: "Beverages",
      description: "Instant coffee for a quick caffeine boost.",
      stock: 60,
      ratings: 4.7,
      reviews: [
        { user: "Phoebe Buffay", comment: "Great coffee, love it!", rating: 5 },
        {
          user: "Joey Tribbiani",
          comment: "Perfect for my morning routine.",
          rating: 4,
        },
      ],
    },
    {
      id: 36,
      name: "Coca Cola (500ml)",
      originalPrice: 40,
      discountedPrice: 35,
      discount: "12.5%",
      image: CocoCola,
      category: "Beverages",
      description: "Refreshing carbonated soft drink.",
      stock: 100,
      ratings: 4.6,
      reviews: [
        {
          user: "Chandler Bing",
          comment: "Always a great refreshment.",
          rating: 5,
        },
        {
          user: "Monica Geller",
          comment: "Perfect drink for parties.",
          rating: 4,
        },
      ],
    },
    {
      id: 37,
      name: "Lay's Potato Chips (60g)",
      originalPrice: 30,
      discountedPrice: 25,
      discount: "16.7%",
      image: Lays,
      category: "Snacks",
      description: "Crispy and delicious potato chips.",
      stock: 150,
      ratings: 4.9,
      reviews: [
        {
          user: "Phoebe Buffay",
          comment: "Best chips, love the flavor.",
          rating: 5,
        },
        {
          user: "Joey Tribbiani",
          comment: "I can eat this all day!",
          rating: 5,
        },
      ],
    },
    {
      id: 38,
      name: "Kellogg's Cornflakes (500g)",
      originalPrice: 250,
      discountedPrice: 220,
      discount: "12%",
      image: Kelloggs,
      category: "Breakfast",
      description: "Crunchy cornflakes for a healthy breakfast.",
      stock: 70,
      ratings: 4.8,
      reviews: [
        {
          user: "Rachel Green",
          comment: "Perfect start to my day.",
          rating: 5,
        },
        {
          user: "Monica Geller",
          comment: "I eat it every morning.",
          rating: 4,
        },
      ],
    },
    {
      id: 39,
      name: "Tata Tea (500g)",
      originalPrice: 120,
      discountedPrice: 110,
      discount: "8.3%",
      image: Tata_tea,
      category: "Beverages",
      description: "Strong and flavorful tea for your daily dose.",
      stock: 80,
      ratings: 4.5,
      reviews: [
        {
          user: "Chandler Bing",
          comment: "Great tea, always my choice.",
          rating: 5,
        },
        { user: "Ross Geller", comment: "Tastes great with milk.", rating: 4 },
      ],
    },
    {
      id: 40,
      name: "Dove Shampoo (200ml)",
      originalPrice: 120,
      discountedPrice: 100,
      discount: "16.7%",
      image: Dove_Shampoo,
      category: "Toiletries",
      description: "Nourishing shampoo for soft and shiny hair.",
      stock: 90,
      ratings: 4.7,
      reviews: [
        {
          user: "Rachel Green",
          comment: "Leaves my hair soft and smooth.",
          rating: 5,
        },
        {
          user: "Monica Geller",
          comment: "A great shampoo for everyday use.",
          rating: 4,
        },
      ],
    },
    {
      id: 41,
      name: "Harpic Toilet Cleaner (500ml)",
      originalPrice: 60,
      discountedPrice: 55,
      discount: "8.3%",
      image: Harpic_Toilet,
      category: "Cleaning",
      description: "Powerful toilet cleaner for hygiene and freshness.",
      stock: 60,
      ratings: 4.6,
      reviews: [
        {
          user: "Monica Geller",
          comment: "Keeps the toilet sparkling clean.",
          rating: 5,
        },
        {
          user: "Rachel Green",
          comment: "Great for regular cleaning.",
          rating: 4,
        },
      ],
    },
    {
      id: 42,
      name: "Whirlpool Dishwashing Liquid (1L)",
      originalPrice: 200,
      discountedPrice: 180,
      discount: "10%",
      image: Whirlpool,
      category: "Cleaning",
      description: "Effective dishwashing liquid for spotless dishes.",
      stock: 55,
      ratings: 4.7,
      reviews: [
        {
          user: "Phoebe Buffay",
          comment: "Leaves dishes shining and fresh.",
          rating: 5,
        },
        {
          user: "Joey Tribbiani",
          comment: "Gets rid of grease easily.",
          rating: 4,
        },
      ],
    },
    {
      id: 43,
      name: "Scotch Brite Scrub Sponge (Pack of 3)",
      originalPrice: 60,
      discountedPrice: 50,
      discount: "16.7%",
      image: Scotch_brite,
      category: "Cleaning",
      description: "Durable scrub sponges for tough cleaning jobs.",
      stock: 75,
      ratings: 4.8,
      reviews: [
        {
          user: "Chandler Bing",
          comment: "Great for cleaning pots and pans.",
          rating: 5,
        },
        {
          user: "Monica Geller",
          comment: "Perfect for scrubbing tough stains.",
          rating: 5,
        },
      ],
    },
    {
      id: 44,
      name: "Vim Dishwash Bar (150g)",
      originalPrice: 35,
      discountedPrice: 30,
      discount: "14.3%",
      image: Vim_Dishwash_bar,
      category: "Cleaning",
      description: "Strong dishwash bar for effortless cleaning.",
      stock: 90,
      ratings: 4.6,
      reviews: [
        {
          user: "Rachel Green",
          comment: "Cleans well, even the toughest grease.",
          rating: 5,
        },
        {
          user: "Phoebe Buffay",
          comment: "I always use this for washing dishes.",
          rating: 4,
        },
      ],
    },
    {
      id: 45,
      name: "Bournvita (500g)",
      originalPrice: 220,
      discountedPrice: 200,
      discount: "9.1%",
      image: Bournvita,
      category: "Beverages",
      description: "Delicious chocolate drink mix for a wholesome drink.",
      stock: 80,
      ratings: 4.7,
      reviews: [
        {
          user: "Monica Geller",
          comment: "Perfect drink before bed.",
          rating: 5,
        },
        { user: "Rachel Green", comment: "Great for kids too.", rating: 4 },
      ],
    },
    {
      id: 46,
      name: "Axe Deodorant (150ml)",
      originalPrice: 200,
      discountedPrice: 170,
      discount: "15%",
      image: Aex_deo,
      category: "Toiletries",
      description: "Long-lasting fragrance for all-day freshness.",
      stock: 40,
      ratings: 4.5,
      reviews: [
        {
          user: "Ross Geller",
          comment: "Keeps me fresh throughout the day.",
          rating: 5,
        },
        {
          user: "Joey Tribbiani",
          comment: "Great scent, lasts all day.",
          rating: 4,
        },
      ],
    },
    {
      id: 47,
      name: "Nivea Body Lotion (200ml)",
      originalPrice: 180,
      discountedPrice: 150,
      discount: "16.7%",
      image: Nivea_body,
      category: "Toiletries",
      description: "Moisturizing body lotion for smooth and hydrated skin.",
      stock: 90,
      ratings: 4.8,
      reviews: [
        {
          user: "Rachel Green",
          comment: "Keeps my skin soft all day.",
          rating: 5,
        },
        {
          user: "Monica Geller",
          comment: "A must-have for dry skin.",
          rating: 5,
        },
      ],
    },
    {
      id: 48,
      name: "Garnier Hair Color (1 Pack)",
      originalPrice: 250,
      discountedPrice: 200,
      discount: "20%",
      image: Garnier_Hair,
      category: "Toiletries",
      description: "Easy-to-use hair color for a rich, vibrant shade.",
      stock: 50,
      ratings: 4.6,
      reviews: [
        {
          user: "Phoebe Buffay",
          comment: "My hair looks amazing with this color.",
          rating: 5,
        },
        {
          user: "Rachel Green",
          comment: "Good quality, covers greys perfectly.",
          rating: 4,
        },
      ],
    },
    {
      id: 49,
      name: "Sunsilk Shampoo (200ml)",
      originalPrice: 110,
      discountedPrice: 95,
      discount: "13.6%",
      image: Sunsilk_Shampoo,
      category: "Toiletries",
      description: "Nourishing shampoo for smooth and shiny hair.",
      stock: 80,
      ratings: 4.7,
      reviews: [
        {
          user: "Monica Geller",
          comment: "Leaves my hair soft and manageable.",
          rating: 5,
        },
        { user: "Rachel Green", comment: "Great for daily use.", rating: 4 },
      ],
    },
    {
      id: 50,
      name: "Vaseline Petroleum Jelly (100g)",
      originalPrice: 50,
      discountedPrice: 40,
      discount: "20%",
      image: Vaseline_Petroleum,
      category: "Toiletries",
      description:
        "Multi-purpose petroleum jelly for skin protection and healing.",
      stock: 100,
      ratings: 4.9,
      reviews: [
        {
          user: "Phoebe Buffay",
          comment: "Perfect for dry skin, a must-have.",
          rating: 5,
        },
        {
          user: "Rachel Green",
          comment: "I use this for everything!",
          rating: 5,
        },
      ],
    },
  ];

  useEffect(() => {
    const foundProduct = groceryData.find((p) => p.id === parseInt(productId));
    setProduct(foundProduct);
    if (foundProduct) {
      setSelectedImage(foundProduct.mainImage);
      setSelectedColor(foundProduct.colors[0]);
      setSelectedSize(foundProduct.sizes[0]);
    }
  }, [productId]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      quantity,
      color: selectedColor,
      size: selectedSize,
    };
    console.log("Product to add to cart:", productToAdd); // Debugging line
    addToCart(productToAdd);
  };

  const handleBuyNow = (id) => {
    console.log("Product ID:", id);
    console.log("Product:", product);
    buyNowCheckout(id);
    localStorage.setItem("Buynow", JSON.stringify([product]));
    navigate("/checkout/buynow");
  };

  return (
    <div>
      <div className="container mx-auto p-4 mt-24 flex justify-center">
        <div className="flex flex-col items-center md:flex-row max-w-4xl w-full">
          <div className="block md:hidden w-full">
            <Carousel responsive={responsive}>
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full object-cover rounded-md mb-2"
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </Carousel>
          </div>

          <div className="hidden md:flex flex-col md:flex-row items-center">
            <div className="flex flex-col items-end mr-2 md:w-1/4 md:mt-2 lg:w-1/4 lg:mb-16 md:mb-16">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className={`w-16 md:w-[75px] lg:w-20 object-cover rounded-md mb-2 cursor-pointer ${
                    selectedImage === image
                      ? "border-2 border-blue-500"
                      : "border"
                  }`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full md:w-3/4 lg:w-2/3 h-auto object-contain rounded-md mb-16"
            />
          </div>

          <div className="md:ml-8 text-center md:text-left">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="flex items-center justify-center md:justify-start mt-2">
              <span className="text-2xl font-bold text-green-600">
                {product.price}
              </span>
              <span className="text-xl text-gray-400 line-through ml-2">
                {product.discountPrice}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold">Color:</h3>
              <div className="flex justify-center md:justify-start mt-2">
                {product.colors && product.colors.length > 0 ? (
                  product.colors.map((color, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 rounded-full mr-2 ${
                        selectedColor === color
                          ? "border-4 border-blue-600"
                          : "border"
                      } cursor-pointer`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    ></div>
                  ))
                ) : (
                  <div>No colors available</div>
                )}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold">Size:</h3>
              <div className="flex justify-center md:justify-start mt-2">
                {product.sizes && product.sizes.length > 0 ? (
                  product.sizes.map((size, index) => (
                    <div
                      key={index}
                      className={`rounded p-3 border mr-4 cursor-pointer ${
                        selectedSize === size
                          ? "border-blue-600"
                          : "border-gray-300"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </div>
                  ))
                ) : (
                  <div>No sizes available</div>
                )}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold">Qty:</h3>
              <div className="flex items-center justify-center md:justify-start mt-2">
                <button
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity === 1}
                  className="p-2 border"
                >
                  -
                </button>
                <span className="mx-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border"
                >
                  +
                </button>
              </div>
            </div>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(product.id)}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Comments />
      </div>
    </div>
  );
};

export default ProductDetails;
