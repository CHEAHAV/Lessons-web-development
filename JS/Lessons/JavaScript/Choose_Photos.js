document.addEventListener('DOMContentLoaded', function(){

    const fileInput = document.querySelector('#fileInput');
    const imagePreview = document.querySelector('#imagePreview');
    
    fileInput.addEventListener('change', function(){
        const file = this.files[0];
        const reader = new FileReader();

        reader.addEventListener('load', ()=>{
            imagePreview.src = reader.result;
        });
        reader.readAsDataURL(file);
    })
});