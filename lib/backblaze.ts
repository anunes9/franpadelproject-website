export async function getSignedImageUrls(filenames: string[]): Promise<string[]> {
  const credentials = Buffer.from(`${process.env.B2_KEY_ID}:${process.env.B2_APPLICATION_KEY}`).toString('base64')

  const response = await fetch('https://api.backblazeb2.com/b2api/v2/b2_authorize_account', {
    headers: { Authorization: `Basic ${credentials}` },
    next: { revalidate: 3600 },
  })

  if (!response.ok) throw new Error(`B2 authorize failed: ${response.statusText}`)

  const { authorizationToken, downloadUrl } = await response.json()
  const bucketName = process.env.B2_BUCKET_NAME

  return filenames.map(
    (filename) => `${downloadUrl}/file/${bucketName}/${filename}?Authorization=${authorizationToken}`
  )
}
