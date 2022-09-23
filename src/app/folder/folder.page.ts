import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from '../modelos/pelicula';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  public peliculas: Array<Pelicula> = [
    {
      poster:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/689056999c42a941b6c78ee4c975a0bcf6d3308a3ed470b2262f0934245a5d30._UY500_UX667_RI_V_TTW_.jpg',
      categoria: 'ciencia ficcion',
      nombre: 'Star wars',
      subtitulo: 'La amenza fantasma',
      sinopsis:'La República Galáctica está sumida en el caos. Los impuestos de las rutas comerciales a los sistemas estelares exteriores están en disputa. Esperando resolverel asunto con un bloqueo de poderosas naves de guerra, la codiciosa Federación del Comercio ha detenido todos los envíos al pequeño planeta de Naboo.',
    },
    {
      poster:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/123b700fee1d143394b97da11a3f165593417172d1780f8c5fad585981e4803d._UY500_UX667_RI_V_TTW_.jpg',
      categoria: 'ficcion',
      nombre: 'star wars',
      subtitulo: 'la amenza',
      sinopsis:'a',
    },
    {
      poster:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/fb65b87f2687ba3aeef3eebf5c06fa8b281585b0780d53e0218044a56f209584._UY500_UX667_RI_V_TTW_.jpg',
      categoria: 'ficcion',
      nombre: 'star wars',
      subtitulo: 'la amenza',
      sinopsis:'a',
    },
    {
      poster:'',
      categoria: 'ficcion',
        nombre: 'star wars',
        subtitulo: 'la amenza',
        sinopsis:'a',
      },
      {   poster:'',
          categoria: 'ficcion',
          nombre: 'star wars',
          subtitulo: 'la amenza',
          sinopsis:'a',
        }

  ];
  public imagen1: string = 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/689056999c42a941b6c78ee4c975a0bcf6d3308a3ed470b2262f0934245a5d30._UY500_UX667_RI_V_TTW_.jpg';
  public imagen2: string = 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/123b700fee1d143394b97da11a3f165593417172d1780f8c5fad585981e4803d._UY500_UX667_RI_V_TTW_.jpg';
  public imagen3: String = 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/fb65b87f2687ba3aeef3eebf5c06fa8b281585b0780d53e0218044a56f209584._UY500_UX667_RI_V_TTW_.jpg';
  public imagen4: string = 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/c5d63f400df3a695c9c8c4a6f23017ed26de46819cf848c341a1625547f21c8b._UY500_UX667_RI_V_TTW_.jpg';
  public imagen5: string = 'https://play-lh.googleusercontent.com/okH4ZOWth4gF4rYb-OilssypAJgQQYwt2hwjMRgPMmxX7OP7RJCjnYLr40P9BTrndJLx';
  public imagen6: string= 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/914b9a40e8b156c74c507032214b3745b489d0368825f660ddf3b10e6fe256f0._RI_V_TTW_.jpg';
  public imagen7: string= 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/eb572967f18814bb211fb968613298b7d2cf031e8ae5217290ac068025e5e2d1._RI_V_TTW_.jpg';
  public imagen8: string= 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/597f420d9e23a988ae10bd5c9360858d61a932545c409cd4f3e7a553a06248ef._RI_V_TTW_.jpg';
  public imagen9: string= 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/90a886ffcf3cd360cc3e7aba446c493f49d74a88d5b104e59cbe4ec01e18caa4._RI_V_TTW_.jpg';

  public titulo1: string='La amenaza fantasma';
  public titulo2: string='El ataque de los clones';
  public titulo3: string='La venganza de los sith';



  public sinopsis1: string = 'La República Galáctica está sumida en el caos. Los impuestos de las rutas comerciales a los sistemas estelares exteriores están en disputa. Esperando resolverel asunto con un bloqueo de poderosas naves de guerra, la codiciosa Federación del Comercio ha detenido todos los envíos al pequeño planeta de Naboo.';
  public sinopsis2: string = 'En el Senado Galáctico reina la inquietud. Varios miles de sistemas solares han declarado su intención de abandonar la República. Este movimiento separatista, liderado por el misterioso conde Dooku, ha provocado que al limitado número de caballeros Jedi les resulte difícil mantener la paz y el orden en la galaxia. La senadora Amidala, antigua Reina de Naboo, regresa al Senado Galáctico para dar su voto en la crítica cuestión de crear un ejército de la República que ayude a los desbordados Jedi.';
  public sinopsis3: string = '¡Guerra! La República se desmorona bajo los ataques del despiadado Lord Sith, el conde Dooku. Hay héroes en ambos bandos, pero el mal está por doquier. En una contundente jugada, el diabólico líder droide, el general Grievous, ha irrumpido en la capital de la República y ha secuestrado al Canciller Palpatine, líder del senado Galáctico. Mientras el ejército droide separatista trata de huir con su valioso rehén, dos caballeros Jedi inician una misión desesperada para liberar al Canciller cautivo.';


}
