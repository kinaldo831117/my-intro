// 프로필 사진. photo.src 가 비어 있으면 placeholder 를 보여 줍니다.
export function profilePhoto({ photo, name }) {
  if (photo.src) {
    return `
      <figure class="profile-photo">
        <img src="${photo.src}" alt="${photo.alt || name}" loading="lazy" />
      </figure>`;
  }

  return `
    <figure class="profile-photo profile-photo--placeholder" role="img" aria-label="프로필 사진 자리">
      <span class="profile-photo__corner profile-photo__corner--tl"></span>
      <span class="profile-photo__corner profile-photo__corner--tr"></span>
      <span class="profile-photo__corner profile-photo__corner--bl"></span>
      <span class="profile-photo__corner profile-photo__corner--br"></span>
      <span class="profile-photo__avatar">${name}</span>
      <figcaption class="profile-photo__caption">Profile Photo</figcaption>
    </figure>`;
}
