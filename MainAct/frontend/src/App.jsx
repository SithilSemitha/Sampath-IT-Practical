import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import './App.css';

const initialAuth = { name: '', email: '', password: '' };
const initialUser = { name: '', email: '', password: '' };
const initialBook = { title: '', author: '', publishedDate: '', genre: '', pages: '' };

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  headers: { 'Content-Type': 'application/json' },
});

function Section({ title, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [authMode, setAuthMode] = useState('sign-in');
  const [authForm, setAuthForm] = useState(initialAuth);
  const [userId, setUserId] = useState('');
  const [userForm, setUserForm] = useState(initialUser);
  const [bookId, setBookId] = useState('');
  const [bookForm, setBookForm] = useState(initialBook);
  const [result, setResult] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  const authHeaders = useMemo(
    () => (token ? { Authorization: `Bearer ${token}` } : {}),
    [token],
  );

  const showResult = (label, data) => {
    setError('');
    setMessage(label);
    setResult(JSON.stringify(data, null, 2));
  };

  const showError = (value) => {
    setMessage('');
    setError(value);
    setResult('');
  };

  const callApi = async (requestFn) => {
    try {
      const response = await requestFn();
      showResult('Success', response.data ?? response);
      return response;
    } catch (err) {
      const messageText = err?.response?.data?.message || err.message || 'Request failed';
      showError(messageText);
      throw err;
    }
  };

  const handleAuthSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      email: authForm.email,
      password: authForm.password,
      ...(authMode === 'sign-up' ? { name: authForm.name } : {}),
    };
    
    const url = authMode === 'sign-in' ? '/api/auth/sign-in' : '/api/auth/sign-up';
    const response = await callApi(() => api.post(url, payload));
    const tokenValue = response?.data?.data?.token;
    if (tokenValue) setToken(tokenValue);
  };

  const handleSignOut = async () => {
    await callApi(() => api.post('/api/auth/sign-out', null, { headers: authHeaders }));
    setToken('');
  };


  //USER AXIOS FUNCtions

  const loadUsers = async () => callApi(() => api.get('/api/users', { headers: authHeaders }));

  const loadUserById = async () => {
    if (!userId) return showError('User ID is required');
    await callApi(() => api.get(`/api/users/${userId}`, { headers: authHeaders }));
  };

  const createUser = async () => callApi(() => api.post('/api/users', userForm, { headers: authHeaders }));

  const updateUser = async () => {
    if (!userId) return showError('User ID is required');
    await callApi(() => api.put(`/api/users/${userId}`, userForm, { headers: authHeaders }));
  };

  const deleteUser = async () => {
    if (!userId) return showError('User ID is required');
    await callApi(() => api.delete(`/api/users/${userId}`, { headers: authHeaders }));
  };

  //BBooks Section

  const loadBooks = async () => callApi(() => api.get('/api/books', { headers: authHeaders }));


  const loadBookById = async () => {
    if (!bookId) return showError('Book ID is required');
    await callApi(() => api.get(`/api/books/${bookId}`, { headers: authHeaders }));
  };
  const createBook = async () => {
    const payload = { ...bookForm, pages: Number(bookForm.pages) };
    await callApi(() => api.post('/api/books', payload, { headers: authHeaders }));
  };

  const updateBook = async () => {
    if (!bookId) return showError('Book ID is required');
    const payload = { ...bookForm, pages: bookForm.pages ? Number(bookForm.pages) : undefined };
    await callApi(() => api.put(`/api/books/${bookId}`, payload, { headers: authHeaders }));
  };

  const deleteBook = async () => {
    if (!bookId) return showError('Book ID is required');
    await callApi(() => api.delete(`/api/books/${bookId}`, { headers: authHeaders }));
  };

  return (
    <div className="app">
      <header className="hero">
        <div>
          <h1>Sampath Practical Examination</h1>
          <p>React Vite Frontend for the backend REST API</p>
        </div>
        <div className="status-row">
          <span>{token ? 'Signed in' : 'Not signed in'}</span>
          {token && (
            <button className="button" type="button" onClick={handleSignOut}>
              Sign out
            </button>
          )}
        </div>
      </header>

      <Section title="Authentication">
        <div className="button-row">
          <button type="button" className={authMode === 'sign-in' ? 'active' : ''} onClick={() => setAuthMode('sign-in')}>
            Sign in
          </button>
          <button type="button" className={authMode === 'sign-up' ? 'active' : ''} onClick={() => setAuthMode('sign-up')}>
            Sign up
          </button>
        </div>
        <form className="grid-form" onSubmit={handleAuthSubmit}>
          {authMode === 'sign-up' && (
            <label>
              Name
              <input value={authForm.name} onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })} />
            </label>
          )}
          <label>
            Email
            <input value={authForm.email} onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })} />
          </label>
          <label>
            Password
            <input type="password" value={authForm.password} onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })} />
          </label>
          <button className="button" type="submit">{authMode === 'sign-in' ? 'Sign in' : 'Sign up'}</button>
        </form>
      </Section>

      <Section title="Users">
        <div className="button-row wrap">
          <button type="button" onClick={loadUsers}>Get all users</button>
          <button type="button" onClick={loadUserById}>Get user by ID</button>
          <button type="button" onClick={createUser}>Create user</button>
          <button type="button" onClick={updateUser}>Update user</button>
          <button type="button" onClick={deleteUser}>Delete user</button>
        </div>
        <div className="grid-form">
          <label>
            User ID
            <input value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="ObjectId" />
          </label>
          <label>
            Name
            <input value={userForm.name} onChange={(e) => setUserForm({ ...userForm, name: e.target.value })} />
          </label>
          <label>
            Email
            <input value={userForm.email} onChange={(e) => setUserForm({ ...userForm, email: e.target.value })} />
          </label>
          <label>
            Password
            <input type="password" value={userForm.password} onChange={(e) => setUserForm({ ...userForm, password: e.target.value })} />
          </label>
        </div>
      </Section>

      <Section title="Books">
        <div className="button-row wrap">
          <button type="button" onClick={loadBooks}>Get all books</button>
          <button type="button" onClick={loadBookById}>Get book by ID</button>
          <button type="button" onClick={createBook}>Create book</button>
          <button type="button" onClick={updateBook}>Update book</button>
          <button type="button" onClick={deleteBook}>Delete book</button>
        </div>
        <div className="grid-form">
          <label>
            Book ID
            <input value={bookId} onChange={(e) => setBookId(e.target.value)} placeholder="ObjectId" />
          </label>
          <label>
            Title
            <input value={bookForm.title} onChange={(e) => setBookForm({ ...bookForm, title: e.target.value })} />
          </label>
          <label>
            Author
            <input value={bookForm.author} onChange={(e) => setBookForm({ ...bookForm, author: e.target.value })} />
          </label>
          <label>
            Published Date
            <input type="date" value={bookForm.publishedDate} onChange={(e) => setBookForm({ ...bookForm, publishedDate: e.target.value })} />
          </label>
          <label>
            Genre
            <input value={bookForm.genre} onChange={(e) => setBookForm({ ...bookForm, genre: e.target.value })} />
          </label>
          <label>
            Pages
            <input type="number" value={bookForm.pages} onChange={(e) => setBookForm({ ...bookForm, pages: e.target.value })} />
          </label>
        </div>
      </Section>.0

      <Section title="Response">
        {message && <div className="alert success">{message}</div>}
        {error && <div className="alert error">{error}</div>}
        <pre>{result || 'Response output will appear here.'}</pre>
      </Section>
    </div>
  );
}

export default App;
