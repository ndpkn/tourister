import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import tour1 from '../../images/featured1.png'
import tour2 from '../../images/featured2.png'
import tour3 from '../../images/featured3.png'
import tour4 from '../../images/featured4.png'
import tour5 from '../../images/featured5.png'
import tour6 from '../../images/featured6.png'

const toursArr = [
    {
        id: uuidv4(),
        img: `${tour1}`,
        name: "Tetema Tour", 
        descr:"Manyara | Lake Eyasi | Ngorongoro | Serengeti visit Village", 
        price:"2,080", 
        time:"7 Days", 
        grade:"4.7", 
        reviews:"108", 
        advantage1:"Free Cancellation",
        advantages: {
            discount: false,
            cancelation: false,
            specials: false,
            fewSeats: true,
            privat: false,
            new: true
        },
        featured: true,
        isLiked: false,
        },
        {
        id: uuidv4(),
        img:`${tour2}`, 
        name:"Pamoja Tour", 
        descr:"Manyara | Lake Eyasi | Ngorongoro | Serengeti", 
        price:"1,820", 
        time:"7 Days", 
        grade:"4.7", 
        reviews:"108", 
        advantage1:"Free Cancellation",
        advantages: {
            discount: false,
            cancelation: false,
            specials: true,
            fewSeats: false,
            privat: false,
            new: true
        },
        featured: true,
        isLiked: false,
        },
        {
        id: uuidv4(),
        img:`${tour3}`, 
        name:"Rose Tour", 
        descr:"Tarangire | Lake Manyara | Serengeti Ngorongoro Crater", 
        price:"1,560", 
        time:"8 Days", 
        grade:"4.7", 
        reviews:"108", 
        advantage1:"Free Cancellation",
        advantages: {
            discount: false,
            cancelation: true,
            specials: false,
            fewSeats: false,
            privat: false,
            new: true
        },
        featured: true,
        isLiked: false,
        },
        {
        id: uuidv4(),
        img: `${tour4}`, 
        name:"Ansi Tour", 
        descr:"Lake Manyara | Serengeti | Ngorongoro Crater", 
        price:"1,300", 
        time:"7 Days", 
        grade:"4.7", 
        reviews:"108", 
        advantage1:"Free Cancellation",
        advantages: {
            discount: false,
            cancelation: false,
            specials: false,
            fewSeats: false,
            privat: true,
            new: false
        },
        featured: true,
        isLiked: false,
        },
        {
        id: uuidv4(),
        img:`${tour5}`, 
        name:"Lina Tour", 
        descr:"Lake Manyara | Serengeti | Ngorongoro Crater", 
        price:"1,040", 
        time:"4 Days", 
        grade:"4.7" ,
        reviews:"108", 
        advantage1:"Free Cancellation",
        advantages: {
            discount: false,
            cancelation: false,
            specials: true,
            fewSeats: false,
            privat: false,
            new: false
        },
        featured: true,
        isLiked: false,
        },
        {
        id: uuidv4(),
        img:`${tour6}`, 
        name:"Sharma Tour", 
        descr:"Tarangire | Ngorongoro Crater | Lake Manyara", 
        price:"750", 
        time:"3 Days", 
        grade:"4.7", 
        reviews:"108", 
        advantage1:"Free Cancellation",
        advantages: {
            discount: false,
            cancelation: false,
            specials: false,
            fewSeats: false,
            privat: true,
            new: false
        },
        featured: true,
        isLiked: false,
        },
        {
        id: uuidv4(),
        img: `${tour4}`, 
        name:"New Ansi Tour", 
        descr:"Lake Manyara | Serengeti | Ngorongoro Crater", 
        price:"1,300", 
        time:"7 Days", 
        grade:"4.7", 
        reviews:"108", 
        advantage1:"Free Cancellation",
        advantages: {
            discount: false,
            cancelation: false,
            specials: true,
            fewSeats: false,
            privat: false,
            new: false
        },
        featured: false,
        isLiked: false,
        },
        {
        id: uuidv4(),
        img: `${tour2}`, 
        name:"New Sharma Tour", 
        descr:"Lake Manyara | Serengeti | Ngorongoro Crater", 
        price:"1,300", 
        time:"7 Days", 
        grade:"4.7", 
        reviews:"108", 
        advantage1:"Free Cancellation",
        advantages: {
            discount: true,
            cancelation: false,
            specials: false,
            fewSeats: true,
            privat: false,
            new: false
        },
        featured: false,
        isLiked: false,
        },
        {
        id: uuidv4(),
        img:`${tour5}`, 
        name:"Marmar Tour", 
        descr:"Tarangire | Ngorongoro Crater | Lake Manyara", 
        price:"750", 
        time:"3 Days", 
        grade:"4.7", 
        reviews:"108", 
        advantage1:"Free Cancellation",
        advantages: {
            discount: false,
            cancelation: true,
            specials: false,
            fewSeats: false,
            privat: true,
            new: false
        },
        featured: false,
        isLiked: false,
        },
        {
        id: uuidv4(),
        img:`${tour3}`, 
        name:"Last Marmar Tour", 
        descr:"Tarangire | Ngorongoro Crater | Lake Manyara", 
        price:"950", 
        time:"3 Days", 
        grade:"4.7", 
        reviews:"108", 
        advantage1:"Free Cancellation",
        advantages: {
            discount: false,
            cancelation: true,
            specials: false,
            fewSeats: true,
            privat: true,
            new: false
        },
        featured: false,
        isLiked: false,
        },
        {
        id: uuidv4(),
        img:`${tour4}`, 
        name:"Marmar Tour", 
        descr:"Tarangire | Ngorongoro Crater | Lake Manyara", 
        price:"1950", 
        time:"3 Days", 
        grade:"4.7", 
        reviews:"108", 
        advantage1:"Free Cancellation",
        advantages: {
            discount: false,
            cancelation: true,
            specials: true,
            fewSeats: false,
            privat: true,
            new: false
        },
        featured: false,
        isLiked: false,
        },
        {
        id: uuidv4(),
        img:`${tour2}`, 
        name:"Marmar Tour", 
        descr:"Tarangire | Ngorongoro Crater | Lake Manyara", 
        price:"1050", 
        time:"3 Days", 
        grade:"4.7", 
        reviews:"108", 
        advantage1:"Free Cancellation",
        advantages: {
            discount: false,
            cancelation: true,
            specials: false,
            fewSeats: true,
            privat: false,
            new: false
        },
        featured: false,
        isLiked: false,
        },
        {
        id: uuidv4(),
        img:`${tour1}`, 
        name:"New Marmar Tour", 
        descr:"Tarangire | Ngorongoro Crater | Lake Manyara", 
        price:"2750", 
        time:"3 Days", 
        grade:"4.7", 
        reviews:"108", 
        advantage1:"Free Cancellation",
        advantages: {
            discount: false,
            cancelation: true,
            specials: false,
            fewSeats: false,
            privat: false,
            new: false
        },
        featured: false,
        isLiked: false,
        },
]

const initialState = {
    tours: toursArr,
    filteredTours: []
}


export const tourSlice = createSlice({
    name: 'tours',
    initialState,
    reducers: {
        favorite: (state, action) => {
            state.tours.map(item => item.id === action.payload ? item.isLiked = !item.isLiked : item.isLiked)
        },
        filteringTours: (state, action) => {
            state.filteredTours = action.payload
        }
    }
})

export const { favorite, filteringTours } = tourSlice.actions

export default tourSlice.reducer