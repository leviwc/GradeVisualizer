#include <iostream>
#include <map>

using namespace std;

#define ll long long
const ll INF = 2e18;
#define int long long
#define pb push_back
#define mp make_pair
#define pii pair<int, int>
#define vi vector<int>
#define all(x) begin(x), end(x)
#define sz(x) (int)(x).size();
#define endl "\n"
#define fastio      \
    cin.tie(NULL);  \
    cout.tie(NULL); \
    ios_base::sync_with_stdio(false)
#define double long double
#define rep(i, x, n) for (int i = x; i < (n); i++)
#define td(i) i.begin(), i.end()
#define rtd(i) i.rbegin(), i.rend()

/*
    Para rodar:
    1. Copie o conteúdo das materias obrigatorias do curso no siac
    2. Cole no arquivo in
    3. De dois enters em cada semestre (TODO: automatizar isso))
    4. Garanta que os semestres estão numerados de 1 ao ultimo, sem pulos
    5. Rode o programa g++ -std=c++17 build_course_data_from_siac.cpp && ./a.out <in >../Frontend/src/data/ufba/nomedocurso.js
    O conteudo vai ficar formatado como um vetor utilizado no componente de semestres
    Esse script não é perfeito e pode ser que não funcione para todos os cursos, ou pode precisar de pequenas alterações
    nos dados de entrada
*/
void solve(string entireString) {
    string s;
    int i = 0;
    map<string, pair<int, int> > m;
    m["--"] = {-1, -1};
    int posIns = 0;
    s = "";
    while(entireString[posIns] != '\n') {
        s+=entireString[posIns];
        posIns++;
    }
    posIns++;
    cout << "import { GradeState } from \"../../components/materia\"; export const engMec = {" << endl;
    cout << "semestre: [" << endl;
    while(posIns<entireString.size()) {
        i++;
        if (i != 1) cout<< "," <<endl<<endl;
        cout << "{numero: \"" << i << "\", materias: [" << endl;
        int j = 0;
        int auxxx = 0;
        while (posIns<entireString.size()) {
            s = "";
            while(entireString[posIns] != '\n') {
                s+=entireString[posIns];
                posIns++;
            }
            posIns++;
             if (!(s[0] != i + 1 + '0' and
                (i < 9 or s[1] != (i + 1) % 10 + '0'))) {
                    break;
                }
            if (auxxx != 0) {
                cout << "," << endl;
            }
            auxxx++;
            string nome = "", codigo = "";
            vector<pair<int, int> > dependencias;
            vector<string> palavras;
            string aux = "";
            for (int e = 0; e < s.size(); e++) {
                if (s[e] == ' ' or s[e] == '\t' or s[e] == ',') {
                    // cout << aux << endl;
                    if (aux != "") palavras.pb(aux);
                    aux = "";
                    continue;
                }
                aux += s[e];
            }
            if (aux != "") {
                palavras.pb(aux);
            }
            codigo = palavras[1];
            nome += palavras[2];
            for (int e = 3; e < palavras.size(); e++) {
                if (!m.count(palavras[e])) {
                    nome += " " + palavras[e];
                } else {
                    if (palavras[e] != "--") dependencias.pb(m[palavras[e]]);
                }
            }
            m[palavras[1]] = {j, i};
            cout << "{id: \"" << j << "\",codigo: \"" << codigo << "\",nome: \""
                 << nome << "\",state:GradeState.NEUTRAL,dependencias: [" << endl;
            for (int e = 0; e < dependencias.size(); e++) {
                cout << "{id:\"" << dependencias[e].first << "\",numero:\""
                     << dependencias[e].second << "\"}"
                     << (e == dependencias.size() - 1 ? "" : ",") << " ";
            }
            cout << endl;
            cout << "]}";

            j++;
        }
        /*
        {id: "0",codigo: "ENGF56",nome: "Introdução á engenharia de produção",
      state:0,dependencias: [

      ]},
        */
        cout << "]}";
    }
    cout << "]};" << endl;
}

signed main() {
    string s = "", aux;
    while(
    getline(cin, aux)) {
        s+=aux + '\n';
    }
    string finalS =  "";
    for (int i = 4; i < s.size(); i++) {
        finalS += s[i];
        if (s[i] == '.' && s[i-1] == 'm' && s[i-2] == 'e' && s[i-3] == 'S') {
            finalS += '\n';
        }
    }

    solve(finalS);
}
