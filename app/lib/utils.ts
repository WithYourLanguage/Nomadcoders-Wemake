/*
이 파일에 대한 기초적인 설명이 필요하다면? => 노마드코더 Maker Master Class #3, 3.2, 6:8초 확인

________________________________________________________

cn() 함수는 우리가 조금 더 편하게 tailwind css에서 조건을 만들 수 있도록 도와주는 함수이다. 
예를 들어, 우리가 특정 페이지에서 특정 조건을 만족하는 경우 특정 스타일을 적용하고 싶다면, (nav에서 어떠한 url로 가는 내용을 강조하고 싶거나)
cn() 함수를 사용하면 편리하다.
*/
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
