var Series = /** @class */ (function (){
    function Series(id, nombre, canal, temporadas, descripcion, url, img){
        this.id=id;
        this.nombre=nombre;
        this.canal=canal;
        this.temporadas=temporadas;
        this.descripcion=descripcion;
        this.url=url;
        this.img=img;
    }
    return Series;
}());
export{Series}