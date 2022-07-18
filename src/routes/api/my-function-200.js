export async function POST(event) {
  console.log("========= Event:", event.platform);

  return {
    status: 200
  }
}