const arr =["Ders çalışma","Kitap okuma","Uyuma","Ders çalışma","Kitap okuma","Uyuma"]

function setData(){
	var data = ""
	arr.forEach((element, index) =>{
		data +=  `<li>
				<div>${element}</div>
				<div class="interaction">
					<button onclick= "deleteItem(${index})"><i class="fas fa-trash"></i></button>
					</div>
				</li>`
	});

document.getElementById('list').innerHTML =data
arrLength()

}

function deleteItem(val){
	arr.splice(val,1)
	setData()
}

function arrLength(){
	document.getElementById('uzunluk').innerHTML=arr.Length
}
