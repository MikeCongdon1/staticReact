package main


import (
	//"encoding/json"
	//"encoding/base64"
	"encoding/json"
	//"errors"
	"fmt"
	//"log"
	//"math/rand"
	"net/http"
	//"io/ioutil"
	// "strconv"
	//"time"
	"github.com/rs/cors"
)
// Page this:
type Page struct {
    Title string
    Body  []byte
}
// RetAPI this is RetAPI
type RetAPI struct {
	Id int
	Name string
	Status string
	Totalphotos int64
}

type JSONSEND struct {
	Name string
	Items []RetAPI
}
// Todo persist object
type TodoObj struct {
	Id int
	Name string
	Type string
	Status string
}
type TodoSend struct {
	Todos []TodoObj
}

func indexHandler(w http.ResponseWriter, r *http.Request) {  
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		if origin := r.Header.Get("Origin"); origin != "" {
		fmt.Print("origin is ",origin)
		w.Header().Set("Access-Control-Allow-Origin", origin)
        w.Header().Set("Access-Control-Allow-Headers", "Accept, Accept-Language, Content-Type")
	}
	if r.Method == "OPTIONS" {
        return
    }
	
	//var jo =  { "copyright": "William Vrbasso", "date": "2018-01-05", "explanation": "A jewel of the southern sky, the Great Carina Nebula, also known as NGC 3372, is one of our galaxy's largest star forming regions. Easily visible to the unaided eye it stands high above the signature hill of Lake Ballard, ephemeral salt lake of Western Australia, in this serene night skyscape from December 25, 2017. The Milky Way itself stretches beyond the southern horizon. Along the Milky Way, bright stars Alpha and Beta Centauri lie just above the hill's right flank, with the Southern Cross and dark Coalsack Nebula above the hill top. Based on a 22 panel mosaic, the scene was cropped to reveal more closely the beauty of this region of the southern Milky Way. On that short summer night, a star tracking camera mount was used to record the mosaic images of the sky, but turned off to image the foreground in moonlight.", "hdurl": "https://apod.nasa.gov/apod/image/1801/CarinaLakeBallard_vrbasso_WebCrop2048.jpg", "media_type": "image", "service_version": "v1", "title": "Carina over Lake Ballard", "url": "https://apod.nasa.gov/apod/image/1801/CarinaLakeBallard_vrbasso_WebCrop1024.jpg" }
	jo := RetAPI{3, "he","stat",5}
	fmt.Println(jo)
	joA := make([]RetAPI, 2)
	joA[0] = jo
	joA[1] =  RetAPI{6, "hesdfg","stadfgt",544}
	tSend := JSONSEND{"rovers", joA}
	
	ji, err := json.Marshal(tSend)
	if err != nil {
		fmt.Println("problems!")
	}
	/*
	{
		"id": 5,
		"name": "Curiosity",
		"landing_date": "2012-08-06",
		"launch_date": "2011-11-26",
		"status": "active",
		"max_sol": 1930,
		"max_date": "2018-01-10",
		"total_photos": 329565,
	}*/
	//var jo = "Hello"
	jh := string(ji[:])
	fmt.Println(jh)
	fmt.Fprintf(w, jh)
	fmt.Print("it has  hit\n")
}

func main(){
    mux := http.NewServeMux()
    mux.HandleFunc("/", indexHandler)

    // cors.Default() setup the middleware with default options being
    // all origins accepted with simple methods (GET, POST). See
	// documentation below for more options.
	c:= cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost"},
		AllowCredentials: true,
		})

    handler := c.Handler(mux)
	

	http.ListenAndServe(":4000", handler)
}