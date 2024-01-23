import { CourseType } from "../courseType";
import { administracao } from "./administracao";
import { administracao_publica } from "./administracao_publica";
import { administracao_publica_e_gestao } from "./administracao_publica_e_gestao";
import { arquitetura } from "./arquitetura";
import { arquitetura_noturno } from "./arquitetura_noturno";
import { arquivologia } from "./arquivologia";
import { arquivologia_noturno } from "./arquivologia_noturno";
import { artes_cenicas_direcao } from "./artes_cenicas_direcao";
import { artes_cenicas_interpretacao } from "./artes_cenicas_interpretacao";
import { artes_visuais } from "./artes_visuais";
import { biblioteconomia } from "./biblioteconomia";
import { biblioteconomia_e_documentacao } from "./biblioteconomia_e_documentacao";
import { biblioteconomia_noturno } from "./biotecnologia-noturno";
import { canto_lirico } from "./canto-lirico";
import { ciencias_biologicas } from "./ciencias-biologicas";
import { ciencias_biologicas_noturno } from "./ciencias-biologicas-noturno";
import { ciencias_contabeis } from "./ciencias-contabeis";
import { ciencias_contabeis_noturno } from "./ciencias-contabeis_noturno";
import { ciencia_da_computacao } from "./ciencias-da-computacao";
import { ciencias_economicas } from "./ciencias-economicas";
import { ciencias_naturais } from "./ciencias-naturais";
import { ciencias_sociais } from "./ciencias-sociais";
import { composicao_e_regencia } from "./composicao_e_regencia";
import { computacao_noturno } from "./computacao_noturno";
import { comunicacao_producao } from "./comunicacao_producao";
import { danca_1 } from "./danca-1";
import { danca_2 } from "./danca-2";
import { danca } from "./danca-3";
import { danca_noturno } from "./danca-noturno";
import { decoracao } from "./decoracao";
import { desenho_e_plastica } from "./desenho-e-plastica";
import { design } from "./design";
import { direito } from "./direito";
import { direito_noturno } from "./direito_noturno";
import { educacao_fisica } from "./educacao_fisica";
import { enfermagem } from "./enfermagem";
import { engenharia_civil } from "./engenharia_civil";
import { engenharia_da_computacao } from "./engenharia_da_computacao_noturno";
import { engenharia_de_agrimensura } from "./engenharia_de_agrimensura_e_cartografia";
import { engenharia_de_grimensura_noturno } from "./engenharia_de_agrimensura_e_cartografia_noturno";
import { engenharia_de_controle_noturno } from "./engenharia_de_controle_de_processos_noturno";
import { engenharia_de_minas_noturno } from "./engenharia_de_minas_noturno";
import { engenharia_de_petroleo } from "./engenharia_de_petroleo";
import { engenharia_de_producao_noturno } from "./engenharia_de_producao_noturno";
import { engenharia_eletrica } from "./engenharia_eletrica";
import { engenharia_mecanica } from "./engenharia_mecanica";
import { engenharia_quimica } from "./engenharia_quimica";
import { engenharia_sanitaria } from "./engenharia_sanitaria_e_ambiental";
import { estatistica } from "./estatistica";
import { estudos_de_genero } from "./estudos_de_genero_e_diversidade";
import { farmacia } from "./farmacia";
import { farmacia_noturno } from "./farmacia_noturno";
import { filosofia } from "./filosofia";
import { fisica } from "./fisica";
import { fisica_noturno } from "./fisica_noturno";
import { fisioterapia } from "./fisioterapia";
import { fonoaudiologia } from "./fonoaudiologia";
import { gastronomia } from "./gastronomia";
import { geofisica } from "./geofisica";
import { geografia } from "./geografia";
import { geografia_noturno } from "./geografia_noturno";
import { geologia } from "./geologia";
import { gestao_de_turismo } from "./gestao_de_turismo_e_desenvolvimento_sustentavel";
import { historia } from "./historia";
import { historia_noturno } from "./historia_noturno";
import { instrumento_violao } from "./instrumento_violao";
import { interdisciplinar_em_artes } from "./interdisciplinar_em_artes_noturno";
import { interdisciplinar_em_ciencias } from "./interdisciplinar_em_ciencias";
import { interdisciplinar_em_humanas } from "./interdisciplinar_em_humanas";
import { interdisciplinar_em_saude } from "./interdisciplinar_em_saude";
import { jornalismo } from "./jornalismo";
import { letras_ingles } from "./letras_ingles";
import { letras_ingles_noturno } from "./letras_ingles_noturno";
import { letras_vernaculas_ingles } from "./letras_vernaculas_ingles";
import { letras_vernaculas_noturno } from "./letras_vernaculas_noturno";
import { letras_vernaculas_portugues } from "./letras_vernaculas_portugues";
import { matematica } from "./matematica";
import { matematica_2 } from "./matematica_2";
import { matematica_3 } from "./matematica_3";
import { matematica_noturno } from "./matematica_noturno";
import { medicina } from "./medicina";
import { medicina_veterinaria } from "./medicina_veterinaria";
import { museologia } from "./museologia";
import { musica } from "./musica";
import { musica_2 } from "./musica_2";
import { musica_piano } from "./musica_piano";
import { musica_popular } from "./musica_popular";
import { nutricao } from "./nutricao";
import { oceanografia } from "./oceanografia";
import { odontologia } from "./odontologia";
import { pedagogia } from "./pedagogia";
import { pedagogia_1 } from "./pedagogia_1";
import { psicologia } from "./psicologia";
import { quimica } from "./quimica";
import { quimica_2 } from "./quimica_2";
import { quimica_noturno } from "./quimica_noturno";
import { saude_coletiva_noturno } from "./saude_coletiva_noturno";
import { secretario_executivo } from "./secretario_executivo";
import { seguranca_publica } from "./seguranca_publica";
import { servico_social } from "./servico_social";
import { sistemas_de_informacao } from "./sistemas_de_informacao";
import { teatro } from "./teatro";
import { teatro_2 } from "./teatro_2";
import { terapia_ocupacional } from "./terapia_ocupacional";
import { transporte_terrestre } from "./transporte_terrestre";
import { zootecnia } from "./zootecnia";

const ufbaCourses = [
  new CourseType("administracao", "Administração", administracao),
  new CourseType(
    "administracao_publica",
    "Administração Pública",
    administracao_publica
  ),
  new CourseType(
    "administracao-publica-e-gestao",
    "Administração Pública e Gestão",
    administracao_publica_e_gestao
  ),
  new CourseType(
    "arquitetura_noturno",
    "Arquitetura e Urbanismo - Noturno",
    arquitetura_noturno
  ),
  new CourseType("arquitetura", "Arquitetura e Urbanismo", arquitetura),
  new CourseType(
    "arquivologia_noturno",
    "Arquivologia - Noturno",
    arquivologia_noturno
  ),
  new CourseType("arquivologia", "Arquivologia", arquivologia),
  new CourseType(
    "artes_cenicas_direcao",
    "Artes Cênicas Direção",
    artes_cenicas_direcao
  ),
  new CourseType(
    "artes_cenicas_interpretacao",
    "Artes Cênicas - Interpretação",
    artes_cenicas_interpretacao
  ),
  new CourseType("artes_visuais", "Artes Visuais", artes_visuais),
  new CourseType(
    "biblioteconomia_e_documentacao",
    "Biblioteconomia e Documentação",
    biblioteconomia_e_documentacao
  ),
  new CourseType("biblioteconomia", "Biblioteconomia", biblioteconomia),
  new CourseType(
    "biblioteconomia_noturno",
    "Biblioteconomia - Noturno",
    biblioteconomia_noturno
  ),
  new CourseType("canto_lirico", "Canto Lírico", canto_lirico),
  new CourseType(
    "ciencias_biologicas_noturno",
    "Ciências Biológicas - Noturno",
    ciencias_biologicas_noturno
  ),
  new CourseType(
    "ciencias_biologicas",
    "Ciências Biológicas",
    ciencias_biologicas
  ),
  new CourseType(
    "ciencias_contabeis_noturno",
    "Ciências Contábeis - Noturno",
    ciencias_contabeis_noturno
  ),
  new CourseType(
    "ciencias_contabeis",
    "Ciências Contábeis",
    ciencias_contabeis
  ),
  new CourseType(
    "ciencia_da_computacao",
    "Ciência da Computação",
    ciencia_da_computacao
  ),
  new CourseType(
    "ciencias_economicas",
    "Ciências Econômicas",
    ciencias_economicas
  ),
  new CourseType("ciencias_naturais", "Ciências Naturais", ciencias_naturais),
  new CourseType("ciencias_sociais", "Ciências Sociais", ciencias_sociais),
  new CourseType(
    "composicao_e_regencia",
    "Composição e Regência",
    composicao_e_regencia
  ),
  new CourseType(
    "computacao_noturno",
    "Computação - Noturno",
    computacao_noturno
  ),
  new CourseType(
    "comunicacao_producao",
    "Comunicação - Produção",
    comunicacao_producao
  ),
  new CourseType("danca_1", "Dança 1", danca_1),
  new CourseType("danca_2", "Dança 2", danca_2),
  new CourseType("danca", "Dança", danca),
  new CourseType("danca_noturno", "Dança - Noturno", danca_noturno),
  new CourseType("decoracao", "Decoração", decoracao),
  new CourseType(
    "desenho_e_plastica",
    "Desenho e Plástica",
    desenho_e_plastica
  ),
  new CourseType("design", "Design", design),
  new CourseType("direito_noturno", "Direito - Noturno", direito_noturno),
  new CourseType("direito", "Direito", direito),
  new CourseType("educacao_fisica", "Educação Fisica", educacao_fisica),
  new CourseType("enfermagem", "Enfermagem", enfermagem),
  new CourseType("engenharia_civil", "Engenharia Cívil", engenharia_civil),
  new CourseType(
    "engenharia_da_computacao",
    "Engenharia da Computação",
    engenharia_da_computacao
  ),
  new CourseType(
    "engenharia_de_grimensura_noturno",
    "Engenharia de Agrimensura e Cartografia - Noturno",
    engenharia_de_grimensura_noturno
  ),
  new CourseType(
    "engenharia_de_grimensura",
    "Engenharia de Agrimensura e Cartografia",
    engenharia_de_agrimensura
  ),
  new CourseType(
    "engenharia_de_controle_noturno",
    "Engenharia de Controle de Processos - Noturno",
    engenharia_de_controle_noturno
  ),
  new CourseType(
    "engenharia_de_minas_noturno",
    "Engenharia de Minas - Noturno",
    engenharia_de_minas_noturno
  ),
  new CourseType(
    "engenharia_de_petroleo",
    "Engenharia de Petroleo",
    engenharia_de_petroleo
  ),
  new CourseType(
    "engenharia_de_producao_noturno",
    "Engenharia de Produção",
    engenharia_de_producao_noturno
  ),
  new CourseType(
    "engenharia_eletrica",
    "Engenharia Elétrica",
    engenharia_eletrica
  ),
  new CourseType(
    "engenharia_mecanica",
    "Engenharia Mecânica",
    engenharia_mecanica
  ),
  new CourseType(
    "engenharia_quimica",
    "Engenharia Química",
    engenharia_quimica
  ),
  new CourseType(
    "engenharia_sanitaria",
    "Engenharia Sanitária",
    engenharia_sanitaria
  ),
  new CourseType("estatistica", "Estatística", estatistica),
  new CourseType(
    "estudos_de_genero",
    "Estudos de Gênero e Diversidade",
    estudos_de_genero
  ),
  new CourseType("farmacia_noturno", "Farmácia - Noturno", farmacia_noturno),
  new CourseType("farmacia", "Farmácia", farmacia),
  new CourseType("filosofia", "Filosofia", filosofia),
  new CourseType("fisica_noturno", "Física - Noturno", fisica_noturno),
  new CourseType("fisica", "Física", fisica),
  new CourseType("fisioterapia", "Fisioterapia", fisioterapia),
  new CourseType("fonoaudiologia", "Fonoaudiologia", fonoaudiologia),
  new CourseType("gastronomia", "Gastronomia", gastronomia),
  new CourseType("geofisica", "Geofísica", geofisica),
  new CourseType("geografia_noturno", "Geografia - Noturno", geografia_noturno),
  new CourseType("geografia", "Geografia", geografia),
  new CourseType("geologia", "Geologia", geologia),
  new CourseType("gestao_de_turismo", "Gestão de Turismo", gestao_de_turismo),
  new CourseType("historia_noturno", "História - Noturno", historia_noturno),
  new CourseType("historia", "História", historia),
  new CourseType(
    "instrumento_violao",
    "Instrumento - Violão",
    instrumento_violao
  ),
  new CourseType(
    "interdisciplinar_em_artes",
    "Interdisciplinar em Artes",
    interdisciplinar_em_artes
  ),
  new CourseType(
    "interdisciplinar_em_ciencias",
    "Interdisciplinar em Ciências",
    interdisciplinar_em_ciencias
  ),
  new CourseType(
    "interdisciplinar_em_humanas",
    "Interdisciplinar em Humanas",
    interdisciplinar_em_humanas
  ),
  new CourseType(
    "interdisciplinar_em_saude",
    "Interdisciplinar em Saúde",
    interdisciplinar_em_saude
  ),
  new CourseType("jornalismo", "Jornalismo", jornalismo),
  new CourseType(
    "letras_ingles_noturno",
    "Letras Inglês - Noturno",
    letras_ingles_noturno
  ),
  new CourseType("letras_ingles", "Letras Inglês", letras_ingles),
  new CourseType(
    "letras_vernaculas_ingles",
    "Letras Vernáculas Ingles",
    letras_vernaculas_ingles
  ),
  new CourseType(
    "letras_vernaculas_noturno",
    "Letras Vernáculas - Noturno",
    letras_vernaculas_noturno
  ),
  new CourseType(
    "letras_vernaculas_portugues",
    "Letras Vernáculas Português",
    letras_vernaculas_portugues
  ),
  new CourseType("matematica_2", "Matemática 2", matematica_2),
  new CourseType("matematica_3", "Matemática 3", matematica_3),
  new CourseType(
    "matematica_noturno",
    "Matemática - Noturno",
    matematica_noturno
  ),
  new CourseType("matematica", "Matemática", matematica),
  new CourseType(
    "medicina_veterinaria",
    "Medicina Veterinária",
    medicina_veterinaria
  ),
  new CourseType("medicina", "Medicina", medicina),
  new CourseType("museologia", "Museologia", museologia),
  new CourseType("musica_2", "Música 2", musica_2),
  new CourseType("musica_piano", "Música - Piano", musica_piano),
  new CourseType("musica_popular", "Música Popular", musica_popular),
  new CourseType("musica", "Música", musica),
  new CourseType("nutricao", "Nutrição", nutricao),
  new CourseType("oceanografia", "Oceanografia", oceanografia),
  new CourseType("odontologia", "Odontologia", odontologia),
  new CourseType("pedagogia_1", "Pedagogia 1", pedagogia_1),
  new CourseType("pedagogia", "Pedagogia", pedagogia),
  new CourseType("psicologia", "Psicologia", psicologia),
  new CourseType("quimica_2", "Química 2", quimica_2),
  new CourseType("quimica_noturno", "Química - Noturno", quimica_noturno),
  new CourseType("quimica", "Química", quimica),
  new CourseType(
    "saude_coletiva_noturno",
    "Saúde Coletiva - Noturno",
    saude_coletiva_noturno
  ),
  new CourseType(
    "secretario_executivo",
    "Secretário Executivo",
    secretario_executivo
  ),
  new CourseType("seguranca_publica", "Segurança Pública", seguranca_publica),
  new CourseType("servico_social", "Serviço Social", servico_social),
  new CourseType(
    "sistemas_de_informacao",
    "Sistemas de Informação",
    sistemas_de_informacao
  ),
  new CourseType("teatro_2", "Teatro 2", teatro_2),
  new CourseType("teatro", "Teatro ", teatro),
  new CourseType(
    "terapia_ocupacional",
    "Terapia Ocupacional",
    terapia_ocupacional
  ),
  new CourseType(
    "transporte_terrestre",
    "Transporte Terrestre",
    transporte_terrestre
  ),
  new CourseType("zootecnia", "Zootecnia", zootecnia),
];

// create map where the id is the key
export const ufbaCoursesMap = new Map();
ufbaCourses.forEach((course) => ufbaCoursesMap.set(course.id, course));
