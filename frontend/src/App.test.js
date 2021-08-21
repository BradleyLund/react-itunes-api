import React from "react";
import Favourites from "../src/Components/favouritescomponent";
import renderer from "react-test-renderer";

let favourites = [
  {
    wrapperType: "track",
    kind: "song",
    artistId: 308406668,
    collectionId: 1270791564,
    trackId: 1270791567,
    artistName:
      "Andrew Rannells, Josh Gad, Rory O'Malley, Kevin Duda, Clark Johnsen, Justin Bohon, Brian Sears, Scott Barnhardt, Benjamin Schrader, Lewis Cleale & Jason Michael Snow",
    collectionName: "The Book of Mormon (Original Broadway Cast Recording)",
    trackName: "Hello!",
    collectionCensoredName:
      "The Book of Mormon (Original Broadway Cast Recording)",
    trackCensoredName: "Hello!",
    collectionArtistId: 1657375,
    collectionArtistName: "Trey Parker, Robert Lopez & Matt Stone",
    collectionArtistViewUrl:
      "https://itunes.apple.com/us/artist/trey-parker/1657375?uo=4",
    artistViewUrl:
      "https://books.apple.com/us/author/andrew-rannells/id308406668?uo=4",
    collectionViewUrl:
      "https://music.apple.com/us/album/hello/1270791564?i=1270791567&uo=4",
    trackViewUrl:
      "https://music.apple.com/us/album/hello/1270791564?i=1270791567&uo=4",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/38/3e/48/383e484b-d453-fa7c-3d79-06c5ea73f0f1/mzaf_1894164507380102910.plus.aac.p.m4a",
    artworkUrl30:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/fc/f7/43/fcf74301-0529-c4e9-3066-bed8c45c5a66/source/30x30bb.jpg",
    artworkUrl60:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/fc/f7/43/fcf74301-0529-c4e9-3066-bed8c45c5a66/source/60x60bb.jpg",
    artworkUrl100:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/fc/f7/43/fcf74301-0529-c4e9-3066-bed8c45c5a66/source/100x100bb.jpg",
    collectionPrice: 11.99,
    trackPrice: 1.29,
    releaseDate: "2011-05-17T12:00:00Z",
    collectionExplicitness: "explicit",
    trackExplicitness: "notExplicit",
    discCount: 1,
    discNumber: 1,
    trackCount: 16,
    trackNumber: 1,
    trackTimeMillis: 172027,
    country: "USA",
    currency: "USD",
    primaryGenreName: "Soundtrack",
    isStreamable: true,
  },
];

const handleRemoveFavourite = (favouriteDetail) => {
  let favouriteList = [...favourites];
  let indexToRemove = favouriteList.indexOf(favouriteDetail);
  favouriteList.splice(indexToRemove, 1);

  setFavourites(favouriteList);
};

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Favourites
        favourites={favourites}
        handleRemoveFavourite={handleRemoveFavourite}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
