class AuthService {
    // Método para obter o token
    getToken() {
        // Acessa o cookie ou localStorage onde o token está armazenado
        const token = document.cookie.split('; ').find(row => row.startsWith('jwt='));
        return token ? token.split('=')[1] : null; // Retorna o token ou null se não existir
    }

    // Método para obter o ID do usuário do token
    getIdUsuario() {
        const token = this.getToken();
        if (!token) return null;

        // Decodifica o token para obter o payload
        const payload = JSON.parse(atob(token.split('.')[1])); // Decodifica a parte payload do token
        return payload ? payload.sub : null; // Retorna o ID do usuário
    }
}

export default new AuthService();
