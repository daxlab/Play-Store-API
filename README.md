# Play-Store-API
Unofficial google play store api written in nodejs

# Usage
Make a GET request

 `localhost:8000/api?package=com.djit.apps.edjing.expert`

 Response will look like

 ```json
{
  "name": "edjing PRO - Music DJ mixer",
  "category": "Music & Audio",
  "packageName": "com.djit.apps.edjing.expert",
  "downloads": "50000 - 100000",
  "description": "The world first DJ app finally releases its professional version: edjing Pro, a full featured DJ mixer! At last, a professional DJ controller optimized for Android smartphones and tablets!All effects are unlocked - no ad - no hidden cost! edjing Pro is equipped with the brand new Sound System of edjing, the result of five years of R&D, to provide deejays with the most reliable and reactive mixer to remix their tracks.This new Sound System enables accurate music frequency analysis, even more concise beatmatching and new sound effects directly coming from professional deejay controllers.Designed by and for professional deejays, the look and feel, as well as the ergonomic of this new remix solution were especially thought of to make this mixing interface the most intuitive possible. To improve your mixing experience, access more than 50 million tracks thanks to a direct access to streaming sources like Deezer and SoundCloud! A SOBER AND ERGONOMIC MIXING INTERFACE THOUGHT OF BY AND FOR PRO DEEJAYS- Direct access to all Mix features on the same screen- Large audio spectrum for optimum beat localizations, making it easier to adjust your songs settings and bpm matching- Songs bpm are directly visible on the interface dedicated to the mix- Direct access to your music library in a single click, with all your songs, titles, albums and playlists- Colored identification of sound effects in use within the audio spectrum to find your way around in a single look- An interchangeable mixer interface with vinyl turntables for turntablists soulsA SMART AND ALMOST UNLIMITED MUSIC LIBRARY- Access more than 50 million tracks thanks to the integration of Deezer and Soundcloud streaming music sources- In addition to streaming sources, access to your local music files, like your own mp3- A global search to browse all your music sources at once (streaming like Deezer or SoundCloud as well as your local mp3)- Search results by track, album, artist, playlists- Prepare your sets in advance thanks to the Queue: you can add songs from any source (local mp3, SoundCloud or Deezer)- Add, edit and/or delete tracks from the Queue in a simple gestureTHE MOST POWERFUL SOUND PROCESSING SYSTEM ON ANDROID SMARTPHONES AND TABLETS- Low audio latency for accuracy and comfort during the mix- Perfect beatmatching: sound effects are now perfectly synchronized with the beats for perfect sets- New automatic track synchronization with continuous beatmatching resetting between songsTHE SAME LEVEL OF FEATURES AS PROFESSIONAL DJ CONTROLLER:- 2 broadcast channels to mix 2 tracks at once- Bpm detection and direct visualization- Ultra-concise scratch- Pre-Cueing- 4 editable Hot Cue- Loop- Tempo- 3-band Equalizer and filters available on each channel- Automix mode- Color effects to give more depth to your mix such as Super Filtrer, the Reverb, the Delay or the Echo Out- Rhythmic effects synchronized on the beats like Beatgrid- Roll, Roll Filter and Reverse- A new ‘Freeze’ function to freeze one of the spectrum and play or replay the best instants- Custom beats thanks to the “Tap BPM” mode: adjust the beats manually as you like using natural sweep and pinch gestures.- Sync feature for an automatic synchronization of your tracks- Record your remix in .wav format to get HQ live recording of your mixing performanceNo more need for expensive DJ turntables, you can now remix all your favorite songs and playlists from your Android device. The real-time sound processing, the ultra fast audio calculation and the precision of the audio analysis enable you to achieve the best mixtapes.1GB RAM minimum recommendedWeb: http://edjing.com/proContact: support.pro@edjing.comFacebook: https://www.facebook.com/pages/edjing-Pro/1574512199467994",
  "overallRating": "4.4",
  "overallRatingCount": "3960",
  "rating5": "2753",
  "rating4": "671",
  "rating3": "224",
  "rating2": "114",
  "rating1": "198",
  "price": "Rs. 376.08",
  "icon": "//lh3.googleusercontent.com/qORJxwkWh3Byw4HnRM-fHaRq3XF_s4OlWwUOhPd5AF_g98gtPOfdXi3H2b3xfSKp8Q=w300",
  "author": "DJiT - Best free music and audio apps for Android",
  "authorUrl": "https://www.google.com/url?q=http://www.edjing.com&sa=D&usg=AFQjCNE-JBnuZkmB652jN5n_Z5W7aLZa9g",
  "appSize": "27M",
  "supportedDevices": "4.0 and up",
  "version": "1.2.6",
  "similarApps": [
    "com.djit.apps.edjing.expert",
    "com.mixvibes.crossdjapp",
    "com.algoriddim.djay",
    "com.djit.apps.edjing.expert.le",
    "com.edjing.edjingdjturntable",
    "com.beatronik.djstudiodemo",
    "com.algoriddim.djay_free",
    "com.mixvibes.crossdjfree",
    "com.medialook.djmusicmixer",
    "com.candysmilestudio.bestdjmixsoftware",
    "com.ladesinc.djpad",
    "com.adj",
    "com.mobiray.djlaunchpad",
    "com.bti.djControl",
    "com.code4fun.app.djmix",
    "es.eduxdream.dj",
    "com.Gameifunia.dj_mixer",
    "com.edjing.edjingdjturntable",
    "com.djit.equalizerplusforandroidfree",
    "com.djit.apps.edjing.expert.le",
    "com.djit.bassboostforandroidfree",
    "com.djit.apps.eq.free",
    "com.djit.apps.yousing",
    "com.djit.bassboostforandroidpro",
    "com.edjing.edjingdjturntable.marshall",
    "com.djit.apps.edjing.scratch",
    "com.djit.apps.equalizerplus.pro.marshall",
    "com.djit.apps.eq.pro",
    "com.djit.equalizerplusforandroidpro"
  ]
}
```

The app is live at [https://google-play-store-api.herokuapp.com/api?package=com.djit.apps.edjing.expert](https://google-play-store-api.herokuapp.com/api?package=com.djit.apps.edjing.expert)


# Run server

```npm start``` for single instance or ```npm run-script cluster``` for cluster of instances.