
export default {
  async fetch(request, env, ctx) {
    try {
      
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
  }
};