"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[76],{5699:(u,_,o)=>{o.d(_,{W:()=>n});var v=o(1626),a=o(3953),c=o(8384);const r="https://api.themoviedb.org/3",i="6faa9fadd4616078eb9a7a5514570483";let n=(()=>{var e;class p{constructor(){this.http=(0,a.WQX)(v.Qq)}getTopRatedMovies(t=1){return this.http.get(`${r}/movie/popular?page=${t}&api_key=${i}`).pipe((0,c.c)(3e3))}getMovieDetails(t){return this.http.get(`${r}/movie/${t}?api_key=${i}`)}}return(e=p).\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.jDH({token:e,factory:e.\u0275fac,providedIn:"root"}),p})()}}]);