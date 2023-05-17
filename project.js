const alertMsg = document.querySelector('#alert')
    const alertBtn = document.querySelector('#Btn')
    const alertMsg2 = document.querySelector('#alert2')
    const mediaBtn = document.querySelector('#media')
    const mediaList = document.querySelector('#mediaList')


    alertMsg.addEventListener('click',()=>{
        if(alertMsg.classList.contains('alert')){

            alertMsg.classList.add('msg')
            alertMsg.classList.remove('alert')

            alertBtn.classList.add('alert')
            alertBtn.classList.remove('msg')

            alertMsg2.classList.add('alert')
            alertMsg2.classList.remove('msg')
        }
    })
        alertBtn.addEventListener('click',()=>{
        if(alertBtn.classList.contains('alert')){

            alertBtn.classList.add('msg')
            alertBtn.classList.remove('alert')

            alertMsg.classList.add('alert')
            alertMsg.classList.remove('msg')

            alertMsg2.classList.add('msg')
            alertMsg2.classList.remove('alert')


        }

    })
    alertMsg2.addEventListener('click',()=>{

        if(alertMsg2.classList.contains('alert')){
            alertMsg2.classList.add('msg')
            alertMsg2.classList.remove('alert')
        }
    })

    mediaBtn.addEventListener('click',()=>{
        if(mediaBtn.classList.contains('mediaBtnAlign')){
            mediaBtn.classList.remove('mediaBtnAlign')


        }
        else{
            mediaBtn.classList.add('mediaBtnAlign')
            console.log('mkmkm')
        }

    })
