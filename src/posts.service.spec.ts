import exp from 'constants';
import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    // реализуйте тест-кейс
    const newPost = postsService.create(post);
    expect(newPost.text).toBe(post.text);

    expect(newPost.id).toBeDefined();
    expect(typeof newPost.id).toBe('string');

    expect(newPost.date).toBeDefined();
    expect(() => new Date(newPost.date)).not.toThrow();

    expect(postsService.find(newPost.id)).toEqual(newPost);
  });

  it('should find a post', () => {
    // реализуйте тест-кейс
    const createdPost = postsService.create(post);
    const foundPost = postsService.find(createdPost.id);

    expect(foundPost).toEqual(createdPost);
    expect(postsService.find('undefined-id')).toBeUndefined();
  });
});