import { writable } from "svelte/store";

export const openModal = writable(false);

export const theme = writable("light");

export const language = writable("en");
