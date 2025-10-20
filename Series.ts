export class Series{
    id: number;
    nombre: string;
    canal: string;
    temporadas: number;
    descripcion: string;
    website: string;
    imageUrl: string;
    constructor(
        id: number,
        nombre: string,
        canal: string,
        temporadas: number,
        descripcion: string,
        website: string,
        imageUrl: string

    )
    {
        this.id=id;
        this.nombre=nombre;
        this.canal=canal;
        this.temporadas=temporadas;
        this.descripcion=descripcion;
        this.website=website;
        this.imageUrl=imageUrl;
    }

}