new Vue({
    el: '#app',
    data: {
        inicio: false,
        flag: null,
        perigo01: null,
        perigo02: null,
        contJog1: '100',
        contJog2: '100',
        logWhind: [],
        logPopo: [],
        cura:[],
    },
    computed: {
        progJog1(){
            if (this.contJog1 >= 100) this.contJog1 = 100
            if (this.contJog1 <= 30) this.perigo01 = 'red'
            if (this.contJog1 > 30) this.perigo01 = 'lightgreen'
        return {
            width: this.contJog1 + '%',
            'background-color': this.perigo01
        }
        },
        progJog2(){
            if (this.contJog2 <= 30) this.perigo02 = 'red'
            if (this.contJog2 > 30) this.perigo02 = 'lightgreen'  
            if (this.contJog2 >= 100) this.contJog2 = 100 
            return {
                width: this.contJog2 + '%',
                'background-color': this.perigo02
            }
        }
    },
    methods: {
        soco(){
            const contJog02 = Math.random() * (10 - 5) + 5
            const contJog01 = Math.random() * (14 - 7) + 7
            this.contJog1 -= Math.round(contJog01)
            this.contJog2 -= Math.round(contJog02)
            if(this.contJog1 + contJog01 <= contJog01) this.contJog1 = 0
            if(this.contJog2 + contJog02 <= contJog02) this.contJog2 = 0          
            return this.log(Math.round(contJog01), Math.round(contJog02) )
        },
        socao(){
            const contJog02 = Math.random() * (10 - 5) + 5
            const contJog01 = Math.random() * (10 - 5) + 5
            this.contJog1 -= Math.round(contJog01)
            this.contJog2 -= Math.round(contJog02)
            if(this.contJog1 + contJog01 <= contJog01) this.contJog1 = 0
            if(this.contJog2 + contJog02 <= contJog02) this.contJog2 = 0
            return this.log(Math.round(contJog01), Math.round(contJog02))
        },
        curar(){
            const cura = Math.random() * (16 - 5) + 5
            const contJog01 = Math.random() * (14 - 7) + 7
            this.contJog1 += Math.round(cura)
            this.contJog1 -= Math.round(contJog01)
            if(this.contJog1 + contJog01 <= contJog01) this.contJog1 = 0
            return this.logCura(Math.round(cura), Math.round(contJog01))
        },
        desistir(){
            this.inicio = !this.inicio
            this.contJog1 = 100
            this.contJog2 = 100
            this.logWhind= [],
            this.logPopo= [],
            this.cura = []
            return{
                'display': this.bgLog
            }
        },
        log(log01, log02){
            this.logWhind.pop()
            this.logPopo.pop()
            this.logWhind.push(`Whinderson levou -${log01} de dano!`)
            this.logPopo.push(`Popó levou -${log02} de dano`)
            return  this.flag = true
        },
        logCura(log01, log02){
            this.logWhind.pop()
            this.cura.pop()
            this.cura.push(`Whinderson recuperou +${log01} de vida!`)
            this.logWhind.push(`Whinderson levou -${log02} de dano!`)
            return  this.flag = false
        },
        vencedor(){
            if(this.contJog1 === 0) return 'Popó';
            if(this.contJog2 === 0) return 'Whinderson';  
        }

    },
})