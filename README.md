<h1>My Travel Book</h1>

<h3>Live at: https://kmsutula.github.io/travel-journal/</h3>

<h2>📋 Summary:</h2> 
<p>
This project was built as part of the Learn React course on Scrimba by Bob Ziroll. This very simple react website populates entries with information from a local data file. Each entry also links to the Google Maps page for that location. </p>



<h2>⚒️ Built with:</h2>
<ul>
<li>HTML 5</li>
<li>CSS 3</li>
<li>React</li>
<li>Font Awesome CDN</li>
</ul>

<h2>🚧 Obstacles/What I Learned:</h2>
<p>My biggest obstacle with this project was the rendering of local images in React. Since the data was rendered dynamically into components from a file, it did not seem useful to manually import each image into the component file. This became an even more important point when considering that the data would change over time, and the imports would then need to be changed. With some trial and error (and research), I found that I could store my images in the public folder and access them by using a require in the inline src attribute, while referencing the filename in data. </p>

<h2>📸 Screenshots:</h2>
<img src="https://user-images.githubusercontent.com/94947661/204107996-9b87ed5c-66ec-4329-850a-1a289dbe7a6e.png">


