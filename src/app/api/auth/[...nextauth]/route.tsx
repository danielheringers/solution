import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        if (!credentials) return null;
        const res = await fetch("https://liveops-api.seidorbrasil.com.br/v2/auth", {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            grant_type: "password",
            username: credentials.username,
            password: credentials.password,
            language: "br",
            loginType: "2",
          })
        });
        
        const user = await res.json();
      
        if (res.ok && user.access_token) {
          return { ...user, name: user.userName };
        } else {
          return null;
        }
    }}),
  ],
  pages: {
    signIn: '/',  // Página de signin customizada, se necessário
    error: '/auth/error', // Página de erro customizada, se necessário
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    }
  }
});
