"use server"

export async function getRandomNumber() {
    // random between 1 and 7
    return Math.floor(Math.random() * 7) + 1    
}